require('dotenv').config()
const https = require('https')
const axios = require('axios')
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('express-hbs');

app.engine('hbs', hbs.express4({ partialsDir: __dirname + '/view/partials' }));

// routing
// const homeRoute = require('./routes/home.js')

app
.set('view engine', 'hbs')
.set('views', `${__dirname}/view/pages`)
.use(express.static(path.join(__dirname, 'static')))
.get('/', homeRoute)
.get('/character/:id', detailRoute)
.use(notFound)


async function getData(){
    const data = await axios('https://rickandmortyapi.com/api/character/')
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

function notFound(req, res){
    res.status(404).send('404 not found')
}



app.listen(port, () => {
    console.log(`Dev app listening on port: ${port}`)
})