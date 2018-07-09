import { createAction } from 'redux-actions';

const LOAD_CARDS = 'LOAD_CARDS';
const LOAD_TRENDING = 'LOAD_TRENDING';
const ADD_FAVORITES = 'ADD_FAVORITES';
const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
const ADD_REMOVE_FAVORITES = 'ADD_REMOVE_FAVORITES';

const loadCards = (payload = {}) => ({ type: LOAD_CARDS, payload });
const addFavorites = (payload = {}) => ({ type: ADD_FAVORITES, payload });
const removeFavorites = (payload = {}) => ({ type: REMOVE_FAVORITES, payload });
const addRemoveFavorites = createAction(ADD_REMOVE_FAVORITES);
const loadTrending = createAction(LOAD_TRENDING);

export default {
  types: {
    LOAD_CARDS,
    ADD_FAVORITES,
    REMOVE_FAVORITES,
    ADD_REMOVE_FAVORITES,
    LOAD_TRENDING,
  },
  creators: {
    loadCards,
    addFavorites,
    removeFavorites,
    addRemoveFavorites,
    loadTrending,
  },
};