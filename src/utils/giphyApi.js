const apiKey = process.env.REACT_APP_GIPHY_KEY;

function statusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export const fetchTrendingGiphysFromWS = (page = 0) => {
  const apiUrl = 'http://api.giphy.com/v1/gifs/trending';

  return fetch(apiUrl + `?api_key=${apiKey}`)
    .then(statusHelper)
    .then(response => response.json());
};

export const fetchSearchedGiphysFromWS = (term) => {
  const apiUrl = 'http://api.giphy.com/v1/gifs/search';

  return fetch(apiUrl + `?q=${term}&api_key=${apiKey}`)
    .then(statusHelper)
    .then(response => response.json());
};