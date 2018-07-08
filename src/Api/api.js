import axios from 'axios';

const API_URL = 'http://api.giphy.com/v1/gifs';
const API_KEY = "kWpyoml3LgBBvv0b03dvNxOSuNGXaRjl";

export const fetchGifsTrending = () => {
    return axios.get(`${API_URL}/trending?api_key=${API_KEY}`).then(response => response.data.data.map(gif => ({ id: gif.id, gif: gif.images.fixed_height_small_still })));
};

export const fetchGifsSearch = (searchQuery) => {
    return axios.get(`${API_URL}/search?q=${searchQuery}&api_key=${API_KEY}`).then(response => response.data.data.map(gif => ({ id: gif.id, gif: gif.images.fixed_height_small_still })));
};