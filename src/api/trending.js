import { GIPHY } from '../utils/Constants';

export const getTrendingList = (records) => {
    const total = records.payload ? records.payload : 25;
    const uri = GIPHY.api.trending + '?api_key=' + GIPHY.key + '&limit=' + total;
    return fetch(uri)
        .then(res => res.json())
        .catch(err => err);
}