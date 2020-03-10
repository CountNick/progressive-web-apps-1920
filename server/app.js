require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('express-hbs');

app.engine('hbs', hbs.express4({ partialsDir: __dirname + '/view/partials' }));

// routing
// const homeRoute = require('./routes/home.js')

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
    // query ? '' : query
    query === undefined ? query = '' : query = query

    console.log('query hier: ', query)
    const data = await axios(`https://rickandmortyapi.com/api/character/?name=${query}`)
    return data
}

//renders the login page
async function homeRoute(req, res){
    const data = await getData()

    res.render('home.hbs', {
        characters: data.data.results
    });
  }

async function detailRoute(req, res){
    const selectedCharacter = +req.params.id.substring(1)
    const data = await getData()

    const detail = data.data.results.find(character => character.id === selectedCharacter)

    // console.log('hoooi', detail)

    res.render('detail.hbs', {
        characterDetail: detail
    })
    
}

async function searchResultsRoute(req, res){
    const searchInput = req.body.searchValue

    // console.log('herro', searchInput)
    const searchResults = await getData(searchInput)

    console.log('searchResults for you man: ', searchResults.data)

    res.render('home.hbs', {
        characters: searchResults.data.results
    })

}

function notFound(req, res){
    res.status(404).send('404 not found')
}



app.listen(port, () => {
    console.log(`Dev app listening on port: ${port}`)
})