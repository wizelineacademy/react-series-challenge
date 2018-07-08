import { createAction } from 'redux-actions';

const LOAD_CARDS = 'LOAD_CARDS';
const ADD_FAVORITES = 'ADD_FAVORITES';
const REMOVE_FAVORITES = 'ADD_FAVORITES';

const loadCards = (payload = {}) => ({ type: LOAD_CARDS, payload });
const addFavorites = createAction(ADD_FAVORITES);
const removeFavorites = createAction(REMOVE_FAVORITES);

export default {
  types: {
    LOAD_CARDS,
    ADD_FAVORITES,
    REMOVE_FAVORITES,
  },
  creators: {
    loadCards,
    addFavorites,
    removeFavorites,
  },
};

