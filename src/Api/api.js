import axios from 'axios';

const API_URL = 'http://api.giphy.com/v1/gifs';

export const fetchGifsTrending = () => {
    return axios.get(`${API_URL}/trending?api_key=${process.env.REACT_APP_API_KEY}`).then(response => response.data.data.map(gif => ({ id: gif.id, title: gif.title, gif: gif.images.fixed_height_downsampled, })));
};

export const fetchGifsSearch = (searchQuery) => {
    return axios.get(`${API_URL}/search?q=${searchQuery}&api_key=${process.env.REACT_APP_API_KEY}`).then(response => response.data.data.map(gif => ({ id: gif.id, title: gif.title, gif: gif.images.fixed_height_downsampled, })));
};