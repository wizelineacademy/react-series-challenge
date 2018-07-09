import { createAction } from 'redux-actions';

const SEARCH_CARDS = 'SEARCH_CARDS';

const searchCards = createAction(SEARCH_CARDS);

export default {
  types: {
    SEARCH_CARDS,
  },
  creators: {
    searchCards,
  },
};