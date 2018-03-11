import config from '../app.config';
import makeAxiosRequest from './makeAxiosRequest';

const { url, key } = config.api;

export const searchGif = text => makeAxiosRequest('get', `${url}/search`, { api_key: key, q: encodeURI(text) });
