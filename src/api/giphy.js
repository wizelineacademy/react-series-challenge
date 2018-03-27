/**
 * Endpoints to giphy
 */
import { GIPHY } from '../utils/Constants';

/**
 * Return url endpoint
 * @param baseUrl: target url endpoint
 * @param query: query to serch
 * @param params: params to apply to the search
 */
function constructUri(baseUrl, query, params = '') {
    return baseUrl+query+params+'&api_key='+ GIPHY.key
}

/**
 * Get trending gifs
 * @param records: gif's total number to show
 */
export const getTrendingList = (records) => {
    const total = records.payload ? records.payload : 25;
    const uri = constructUri(GIPHY.api.trending, '?limit='+total);
    return fetch(uri)
        .then(res => res.json())
        .catch(err => err);
}

/**
 * Seatch for gifs
 * @param query: string to search
 * @param offset: offset to start
 */
export const searchGifs = (query, offset = 0) => {
    const uri = constructUri(GIPHY.api.search, '&q=' + query.query.payload, '&limit='+offset);
    return fetch(uri)
        .then(res => res.json())
        .then(json => ({
            query: query.query.payload,
            list: json
        }))
        .catch(err => err);
}

/**
 * Get a gif by Id
 * @param req: gif's id string
 */
export const getById = req => {
    const uri = GIPHY.api.searchId + req.payload + '?api_key=' + GIPHY.key;
    return fetch(uri)
        .then(res => res.json())
        .then(json => ({
            ...json,
            data: [json.data]
        }))
        .catch(err => err);
}