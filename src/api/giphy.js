import { GIPHY } from '../utils/Constants';

export const getTrendingList = (records) => {
    const total = records.payload ? records.payload : 25;
    const uri = GIPHY.api.trending + '?api_key=' + GIPHY.key + '&limit=' + total;
    return fetch(uri)
        .then(res => res.json())
        .catch(err => err);
}

export const searchGifs = (query, offset = 0) => {
    const uri = GIPHY.api.search + '?api_key=' + GIPHY.key + '&q=' + query.query.payload;
    console.log('to fetch search ', query, offset, uri)
    return fetch(uri)
        .then(res => res.json())
        .then(json => ({
            query: query.query.payload,
            list: json
        }))
        .catch(err => err);
}