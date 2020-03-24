const axios = require('axios')

const getData = async (query) => {
    query === undefined ? query = '' : query = query
    
    const data = await axios(`https://rickandmortyapi.com/api/character/?name=${query}`)
    
    return data
}

const getCharacter = async (query) => {
    query === undefined ? query = '' : query = query
    const data = await axios(`https://rickandmortyapi.com/api/character/${query}`)
    
    return data
}

module.exports = { getData, getCharacter}