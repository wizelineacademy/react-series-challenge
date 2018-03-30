const API_KEY = 'GIPHY-KEY';
const ENDPOINT = 'http://api.giphy.com';

export const getTrendingGifs = () => {
  const path = '/v1/gifs/trending';
  return fetch(`${ENDPOINT}${path}?api_key=${API_KEY}&limit=26`)
    .then(res => res.json())
    .then(parsedResp => parsedResp.data);
};
export const searchGifs = (term) => {
  const path = '/v1/gifs/search';
  return fetch(`${ENDPOINT}${path}?q=${term}&api_key=${API_KEY}&limit=26`)
    .then(res => res.json())
    .then(parsedResp => parsedResp.data);
};

export const searchSingleGif = id => {
  const path = '/v1/gifs';
  return fetch(`${ENDPOINT}${path}/${id}?q=&api_key=${API_KEY}`)
    .then(res => res.json())
    .then(parsedResp => parsedResp.data);
};