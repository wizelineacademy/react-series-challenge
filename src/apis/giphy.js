import giphyServ from '../services/giphy';
const api_key = 'yD4ObTf7LP9vO8V7jW1mlWbB86ZiKNUu'
export default {
  search: term => giphyServ.get(`/search?api_key=${api_key}&q=${term}`),
  trending: () => giphyServ.get(`/trending?api_key=${api_key}`)
  
}