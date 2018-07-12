import { createAction } from 'redux-actions';

const LOAD_CARDS = 'LOAD_CARDS';
const LOAD_TRENDING = 'LOAD_TRENDING';
const ADD_FAVORITES = 'ADD_FAVORITES';
const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
const ADD_REMOVE_FAVORITES = 'ADD_REMOVE_FAVORITES';
const LOAD_FAVORITES = 'LOAD_FAVORITES';
const SET_FAVORITES = 'SET_FAVORITES';

const loadCards = (payload = {}) => ({ type: LOAD_CARDS, payload });
const addFavorites = (payload = {}) => ({ type: ADD_FAVORITES, payload });
const removeFavorites = (payload = {}) => ({ type: REMOVE_FAVORITES, payload });
const addRemoveFavorites = createAction(ADD_REMOVE_FAVORITES);
const loadTrending = createAction(LOAD_TRENDING);
const loadFavorites = createAction(LOAD_FAVORITES);
const setFavorites = (payload = {}) => ({ type: SET_FAVORITES, payload });

export default {
  types: {
    LOAD_CARDS,
    ADD_FAVORITES,
    REMOVE_FAVORITES,
    ADD_REMOVE_FAVORITES,
    LOAD_TRENDING,
    LOAD_FAVORITES,
    SET_FAVORITES,
  },
  creators: {
    loadCards,
    addFavorites,
    removeFavorites,
    addRemoveFavorites,
    loadTrending,
    loadFavorites,
    setFavorites,
  },
};