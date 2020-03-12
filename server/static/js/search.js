console.log('js werkt!')

const searchBar = document.getElementById('search')

console.log('searchBar: ', searchBar)

searchBar.addEventListener('input', function(event){
    const userInput = event.target.value
    
    history.resplaceState({}, '/searchResults' + userInput)

    // getData(userInput)
    

})

async function getData(query){

    query === undefined ? query = '' : query = query
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)

    const jsonData = await response.json()
    
    console.log('data op je muil: ', jsonData)

    return data

}