const FAVORITE_GIFS_ADD = 'FAVORITE_GIFS_ADDº';
const FAVORITE_GIFS_DELETE = 'FAVORITE_GIFS_DELETE';
const FAVORITE_GIFS_FETCH = 'FAVORITE_GIFS_FETCH';

const addFavoriteGif = (payload = {}) => ({ type: FAVORITE_GIFS_ADD, payload });
const deleteFavoriteGif  = (payload = {}) => ({ type: FAVORITE_GIFS_DELETE, payload });
const fetchFavoriteGifs = (payload = {}) => ({ type: FAVORITE_GIFS_FETCH, payload });

export default {
    types: {
        FAVORITE_GIFS_ADD,
        FAVORITE_GIFS_DELETE,
        FAVORITE_GIFS_FETCH,
    },
    creators: {
        addFavoriteGif,
        deleteFavoriteGif,
        fetchFavoriteGifs
    },
};