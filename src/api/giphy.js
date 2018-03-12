import request from 'request-promise';

const uri = 'https://api.giphy.com/v1/gifs'
const api_key = 'd3Vj2NbGFbUVkyvfyV16zb9QW5RYWBgg'
const page_size = 24;


const getTrending = (page) => {
  return request({
    "method":"GET", 
    "uri": `${uri}/trending?api_key=${api_key}&offset=${page * page_size}&limit=${page_size}`,
    "json": true
  })
}

const getSearch = ({ page, searchTerm }) => {
  return request({
    "method":"GET", 
    "uri": `${uri}/search?api_key=${api_key}&q=${searchTerm}&limit=${page_size}&offset=${page * page_size}`,
    "json": true
  })
}

const getGif = (gifId) => {
  return request({
    "method":"GET", 
    "uri": `${uri}/${gifId}?api_key=${api_key}`,
    "json": true
  })
}

const getFavorite = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  return request({
    "method":"GET", 
    "uri": `${uri}?api_key=${api_key}&ids=${favorites.toString()}`,
    "json": true
  })
}

export { getTrending, getSearch, getFavorite, getGif }