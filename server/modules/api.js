const axios = require('axios')

async function getData(query){
    query === undefined ? query = '' : query = query
    
    const data = await axios(`https://rickandmortyapi.com/api/character/?name=${query}`)
    
    return data
}

async function getCharacter(query){
    query === undefined ? query = '' : query = query
    const data = await axios(`https://rickandmortyapi.com/api/character/${query}`)
    
    return data
}

module.exports = { getData, getCharacter}