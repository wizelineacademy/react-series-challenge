import { createAction } from 'redux-actions';

const SEARCH_CARDS = 'SEARCH_CARDS';
const ERROR_SEARCH = 'ERROR_SEARCH';

const searchCards = createAction(SEARCH_CARDS);
const errorSearch = createAction(ERROR_SEARCH);

export default {
  types: {
    SEARCH_CARDS,
    ERROR_SEARCH,
  },
  creators: {
    searchCards,
    errorSearch,
  },
};