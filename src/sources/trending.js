import config from '../app.config';
import makeAxiosRequest from './makeAxiosRequest';

const { url, key } = config.api;

export const getTrending = () => makeAxiosRequest('get', `${url}/trending`, { api_key: key });
