require('dotenv').config()
const router = require('./routes/router.js')
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('express-hbs')
const compression = require('compression')

app
    .set('etag', false)
    .use(compression({
        filter: () => {return true}
    }))
    .engine('hbs', hbs.express4({ partialsDir: __dirname + '/view/partials' }))
    .use(bodyParser.urlencoded({ extended: true }))
    .set('view engine', 'hbs')
    .set('views', `${__dirname}/view/pages`)
    .use(express.static(path.join(__dirname, 'static')))
    .get('/', router.homeRoute)
    .get('/character/:id', router.detailRoute)
    .get('/searchResults', router.searchResultsRoute)
    .get('/offline', router.offlineRoute)
    .use(router.notFound)

app.listen(port, () => {
    console.log(`Dev app listening on port: ${port}`)
})