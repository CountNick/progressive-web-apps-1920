require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('express-hbs');

app.engine('hbs', hbs.express4({ partialsDir: __dirname + '/view/partials' }))

app
    .use(bodyParser.urlencoded({ extended: true }))
    .set('view engine', 'hbs')
    .set('views', `${__dirname}/view/pages`)
    .use(express.static(path.join(__dirname, 'static')))
    .get('/', homeRoute)
    .get('/character/:id', detailRoute)
    .post('/searchResults', searchResultsRoute)
    .use(notFound)


async function getData(query){
    
    query === undefined ? query = '' : query = query

    console.log('query hier: ', query)
    const data = await axios(`https://rickandmortyapi.com/api/character/?name=${query}`)
    
    return data
}

async function getCharacter(query){
    query === undefined ? query = '' : query = query
    const data = await axios(`https://rickandmortyapi.com/api/character/${query}`)
    
    return data
}

async function homeRoute(req, res){
    const data = await getData()

    res.render('home.hbs', {
        characters: data.data.results
    });
  }

async function detailRoute(req, res){
    const selectedCharacter = +req.params.id.substring(1)

    const detail = await getCharacter(selectedCharacter)

    res.render('detail.hbs', {
        characterDetail: detail.data
    })
    
}

async function searchResultsRoute(req, res){
    const searchInput = req.body.searchValue
    // console.log('herro', searchInput)
    const searchResults = await getData(searchInput)

    res.render('searchResults.hbs', {
        characters: searchResults.data.results,
        userInput: searchInput
    })
 
}


function notFound(req, res){
    res.status(404).render('notFound.hbs')
}

app.listen(port, () => {
    console.log(`Dev app listening on port: ${port}`)
})