import config from '../app.config';
import makeAxiosRequest from './makeAxiosRequest';

const { url, key } = config.api;

export const getGif = id => makeAxiosRequest('get', `${url}/${id}`, { api_key: key });
