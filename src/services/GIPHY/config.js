const config = {
  apiKey: process.env.REACT_APP_GIPHY_API_KEY,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  search: {
    baseUrl: 'https://api.giphy.com/v1/gifs/search?rating=G&lang=en'
  },
  trending: {
    baseUrl: 'https://api.giphy.com/v1/gifs/trending?rating=G'
  }
}

export default config
