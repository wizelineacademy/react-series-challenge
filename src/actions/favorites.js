import { createAction } from 'redux-actions';

const ADD_FAVORITE = 'ADD_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';
const GET_FAVORITES_GIFS = 'GET_FAVORITES_GIFS';
const FETCHED_FAVORITES_GIFS = 'FETCHED_FAVORITES_GIFS';

const addFavorite = createAction(ADD_FAVORITE);
const deleteFavorite = createAction(DELETE_FAVORITE);
const getFavoritesGifs = createAction(GET_FAVORITES_GIFS);
const fetchedFavoritesGifs = createAction(FETCHED_FAVORITES_GIFS);

export default {
    types: {
        ADD_FAVORITE,
        DELETE_FAVORITE,
        GET_FAVORITES_GIFS,
        FETCHED_FAVORITES_GIFS,
    },
    creators: {
        addFavorite,
        deleteFavorite,
        getFavoritesGifs,
        fetchedFavoritesGifs
    },
};