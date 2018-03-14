const apiKey = 'h2NPeFw64kpEHRo2nf3bucA8f92l4TUN'
const baseUrl = 'http://api.giphy.com'
const getJson = (url) => {
  return fetch(url)
    .then (response => response.json())
    .catch(error => {
      console.log('giphy api error::', error)
      return null
    })
}

const giphy = {
  fetchTrending: () => getJson(`${baseUrl}/v1/gifs/trending?api_key=${apiKey}`),
  fetchSearch: (q) => getJson(`${baseUrl}/v1/gifs/search?api_key=${apiKey}&q=${q}`)
}

export default giphy
