const FAVORITE_GIFS_ADD = 'FAVORITE_GIFS_ADDº';
const FAVORITE_GIFS_DELETE = 'FAVORITE_GIFS_DELETE';
const FAVORITE_GIFS_FETCH = 'FAVORITE_GIFS_FETCH';
const FAVORITE_GIFS_FILTER = 'FAVORITE_GIFS_FILTER';

const addFavoriteGif = (payload = {}) => ({ type: FAVORITE_GIFS_ADD, payload });
const deleteFavoriteGif  = (payload = {}) => ({ type: FAVORITE_GIFS_DELETE, payload });
const fetchFavoriteGifs = (payload = {}) => ({ type: FAVORITE_GIFS_FETCH, payload });
const filterFavoriteGifs = (payload = {}) => ({ type: FAVORITE_GIFS_FILTER, payload});

export default {
    types: {
        FAVORITE_GIFS_ADD,
        FAVORITE_GIFS_DELETE,
        FAVORITE_GIFS_FETCH,
        FAVORITE_GIFS_FILTER,
    },
    creators: {
        addFavoriteGif,
        deleteFavoriteGif,
        fetchFavoriteGifs,
        filterFavoriteGifs,
    },
};