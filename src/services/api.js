const API_KEY = 'IQkt47mC1gSCSWSm7UomSm3O8rdcBIt4'
const BASE_URL = 'https://api.giphy.com/v1/gifs/'

export const getTrending = () => fetch(`${BASE_URL}trending?api_key=${API_KEY}`)
.then(res => res.json())
