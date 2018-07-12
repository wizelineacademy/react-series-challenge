import { createAction } from 'redux-actions';

const SEARCH_CARDS = 'SEARCH_CARDS';
const SEARCH_FAVS = 'SEARCH_FAVS';

const searchCards = createAction(SEARCH_CARDS);
const searchFavs = createAction(SEARCH_FAVS);

export default {
  types: {
    SEARCH_CARDS,
    SEARCH_FAVS,
  },
  creators: {
    searchCards,
    searchFavs,
  },
};