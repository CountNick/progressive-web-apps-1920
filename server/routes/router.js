const api = require('../modules/api.js')

async function homeRoute(req, res){
    const data = await api.getData()
    res.render('home.hbs', {
        characters: data.data.results,
        metaData: data.data,
        pageTitle: 'Home'
    });
  }

async function detailRoute(req, res){
    const selectedCharacter = +req.params.id.substring(1)

    const detail = await api.getCharacter(selectedCharacter)

    res.render('detail.hbs', {
        characterDetail: detail.data,
        pageTitle: detail.data.name
    })
    
}

async function searchResultsRoute(req, res){
    const searchInput = req.query.searchValue

    const searchResults = await api.getData(searchInput)

    if(req.query.async){
        const data = await api.getData(req.query.query)        

          res.render('results.hbs',{
              characters: data.data.results,
              pageTitle: 'Results'
            })
    }
    else{
        res.render('searchResults.hbs', {
            characters: searchResults.data.results,
            userInput: searchInput,
            pageTitle: 'Results'
        })

    }
 
}

function notFound(req, res){
    res.status(404).render('notFound.hbs', {
        pageTitle: 'Not found'
    })
}

function offlineRoute(req, res){
    res.render('offline.hbs', {
        pageTitle: 'Offline'
    })
}

module.exports = { homeRoute, detailRoute, searchResultsRoute, notFound, offlineRoute}