import axios from 'axios';

const API_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = process.env.REACT_APP_GIPHY_KEY;

const API = axios.create({ baseURL: API_URL, params: { api_key: API_KEY } });

export function getTrending() {
    return API.get('/trending');
}

export function search(query: string) {
    return API.get('/search', {
        params: {
            q: query,
            limit: 10,
            offset: 0,
            rating: 'G',
            lang: 'en'
        }
    });
}