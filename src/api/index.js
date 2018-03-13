import config from '../app.config';
import makeAxiosRequest from './makeAxiosRequest';

const { url, key } = config.api;

export const loadTrending = () => makeAxiosRequest('get', `${url}/trending`, { api_key: key });
export const getGif = id => makeAxiosRequest('get', `${url}/${id}`, { api_key: key });
export const searchGif = text => makeAxiosRequest('get', `${url}/search`, { api_key: key, q: encodeURI(text) });
