require('dotenv').config()
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
.use(notFound)




//renders the login page
function homeRoute(req, res) {
    res.render("home.hbs");
  }

function notFound(req, res){
    res.status(404).send('404 not found')
}



app.listen(port, () => {
    console.log(`Dev app listening on port: ${port}`)
})