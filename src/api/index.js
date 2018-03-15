import axios from 'axios';

import config from '../app.config';

const { url, key } = config.api;

export const loadTrending = () => axios.get(`${url}/trending`, { params: { api_key: key } });
export const getGif = id => axios.get(`${url}/${id}`, { params: { api_key: key } });
export const searchGif = text => axios.get(`${url}/search`, { params: { api_key: key, q: encodeURI(text) } });
