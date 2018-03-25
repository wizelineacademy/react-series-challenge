import { createAction } from 'redux-actions';

const GET_FAVORITE_START = 'GET_FAVORITE_START';
const GET_FAVORITE_COMPLETE = 'GET_FAVORITE_COMPLETE';
const GET_FAVORITE_ERROR = 'GET_FAVORITE_ERROR';
const ADD_FAVORITE_START = 'ADD_FAVORITE_START';
const ADD_FAVORITE_COMPLETE = 'ADD_FAVORITE_COMPLETE';
const ADD_FAVORITE_ERROR = 'ADD_FAVORITE_ERROR';
const REMOVE_FAVORITE_START = 'REMOVE_FAVORITE_START';
const REMOVE_FAVORITE_COMPLETE = 'REMOVE_FAVORITE_COMPLETE';
const REMOVE_FAVORITE_ERROR = 'REMOVE_FAVORITE_ERROR';

const getFavoritesList = createAction(GET_FAVORITE_START);
const getFavoritesListComplete = createAction(GET_FAVORITE_COMPLETE);
const getFavoritesListError = createAction(GET_FAVORITE_ERROR);
const addFavorite = createAction(ADD_FAVORITE_START);
const addFavoriteComplete = createAction(ADD_FAVORITE_COMPLETE);
const addFavoriteError = createAction(ADD_FAVORITE_ERROR);
const removeFavorite = createAction(REMOVE_FAVORITE_START);
const removeFavoriteComplete = createAction(REMOVE_FAVORITE_COMPLETE);
const removeFavoriteError = createAction(REMOVE_FAVORITE_ERROR);

export default {
    types: {
        GET_FAVORITE_START,
        GET_FAVORITE_COMPLETE,
        GET_FAVORITE_ERROR,
        ADD_FAVORITE_START,
        ADD_FAVORITE_COMPLETE,
        ADD_FAVORITE_ERROR,
        REMOVE_FAVORITE_START,
        REMOVE_FAVORITE_COMPLETE,
        REMOVE_FAVORITE_ERROR
    },
    creators: {
        getFavoritesList,
        getFavoritesListComplete,
        getFavoritesListError,
        addFavorite,
        addFavoriteComplete,
        addFavoriteError,
        removeFavorite,
        removeFavoriteComplete,
        removeFavoriteError,
    }
}