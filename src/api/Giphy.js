const generateRandomPrices = () => ({
    BTC: parseInt(8500 + 1000 * Math.random(), 10),
    ETH: parseInt(860 + 100 * Math.random(), 10),
    LTC: parseInt(155 + 10 * Math.random(), 10),
    XRP: parseInt(.98 * Math.random(), 10),
    fetching: false,
});

function handleApiErrors (response) {
    if (!response.ok) throw Error(response.statusText)
    return response
  }
  export const loadPrices = () => {
    console.log('[API] loading prices...');
    return new Promise(resolve => setTimeout(function(){
        resolve(generateRandomPrices())
    } , 2000));
};

export const loadPrices2 = () => {
    console.log('[API] loading prices...');
    return new Promise(function(resolve)
    {
        fetch('http://api.giphy.com/v1/gifs/trending?api_key=kLIQQQN3aix9cb3YOKkP6kXlVIWjmsBI').then(response=>{
            resolve(response.json())
        });
    } );
};
function loadTrending(){
    return fetch('http://api.giphy.com/v1/gifs/trending?limit=24&api_key=kLIQQQN3aix9cb3YOKkP6kXlVIWjmsBI')
        .then(handleApiErrors)
        .then(response => response.json())
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
    return fetch('http://api.giphy.com/v1/gifs/search/' + id + '?api_key=kLIQQQN3aix9cb3YOKkP6kXlVIWjmsBI')
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
