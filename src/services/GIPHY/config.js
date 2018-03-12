const config = {
  apiKey: process.env.REACT_APP_GIPHY_API_KEY,
  headers: {
    Accept: 'application/json'
  },
  baseUrl: 'https://api.giphy.com/v1/gifs',
  search: {
    url: '/search?rating=G&lang=en'
  },
  trending: {
    url: '/trending?rating=G'
  },
  byId: {
    url: '/'
  },
  defaultLimit: 30
}

export default config
