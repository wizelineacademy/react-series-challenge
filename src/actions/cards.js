import { createAction } from 'redux-actions';

const LOAD_CARDS = 'LOAD_CARDS';
const LOAD_TRENDING = 'LOAD_TRENDING';
const ADD_FAVORITES = 'ADD_FAVORITES';
const REMOVE_FAVORITES = 'ADD_FAVORITES';

const loadCards = (payload = {}) => ({ type: LOAD_CARDS, payload });
//const loadCards = createAction(LOAD_CARDS);
const addFavorites = createAction(ADD_FAVORITES);
const removeFavorites = createAction(REMOVE_FAVORITES);
const loadTrending = createAction(LOAD_TRENDING);

export default {
  types: {
    LOAD_CARDS,
    ADD_FAVORITES,
    REMOVE_FAVORITES,
    LOAD_TRENDING,
  },
  creators: {
    loadCards,
    addFavorites,
    removeFavorites,
    loadTrending,
  },
};