
function handleApiErrors (response) {
    if (!response.ok) throw Error(response.statusText)
    return response
  }
function loadTrending(){
    return fetch('http://api.giphy.com/v1/gifs/trending?limit=24&api_key=kLIQQQN3aix9cb3YOKkP6kXlVIWjmsBI')
        .then(handleApiErrors)
        .then(response => { console.log("los");return response.json()})
        .catch((error) => { throw error });
}
function loadSearch(search){
    return fetch('http://api.giphy.com/v1/gifs/search?limit=24&api_key=kLIQQQN3aix9cb3YOKkP6kXlVIWjmsBI&q=' + search)
        .then(handleApiErrors)
        .then(response => response.json())
        .catch((error) => { throw error });
}
function loadSingleGiphy(id)
{
    return fetch('http://api.giphy.com/v1/gifs/' + id + '?api_key=kLIQQQN3aix9cb3YOKkP6kXlVIWjmsBI')
        .then(handleApiErrors)
        .then(response => response.json())
        .catch((error) => { throw error });
}
export default
{
    loadTrending,
    loadSearch,
    loadSingleGiphy
}
