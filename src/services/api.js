import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const BASE_URL = 'https://api.giphy.com/v1';
const api = {
  trending: () => {
    const URL = `${BASE_URL}/gifs/trending?api_key=${API_KEY}&limit=25`;
    return axios.get(URL);
  },
  search: term => {
    const URL = `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${term}`;
    return axios.get(URL);
  },
  gifs: params => {
    const ids = (params.ids || []).join(',');
    const URL = `${BASE_URL}/gifs?api_key=${API_KEY}&ids=${ids}`;
    return axios.get(URL);
  },
};

export default api;
