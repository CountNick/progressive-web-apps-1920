require("dotenv").config();
const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3000

app
.use(notFound)
.use(express.static(path.join(__dirname, 'static')))
.set('view engine', 'ejs')
.set('views', `${__dirname}/view/pages`)
.get('/', home)

function home(req, res){
    res.send('Home')
}

function notFound(req, res){
    res.status(404).send('404 not found')
}

app.listen(port, () => {
    console.log('Dev app listening on port: ' + port)
})