import { createAction } from 'redux-actions';

const LOAD_DATA_START = 'LOAD_DATA_START';
const LOAD_DATA_FINISHED = 'LOAD_DATA_FINISHED';
const LOAD_DATA_FAILED = 'LOAD_DATA_FAILED';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const SEARCH = 'SEARCH';

const loadDataStart = createAction(LOAD_DATA_START);
const loadDataFinished = createAction(LOAD_DATA_FINISHED);
const loadDataFailed = createAction(LOAD_DATA_FAILED);
const toggleFavorite = createAction(TOGGLE_FAVORITE);
const search = createAction(SEARCH);

export default {
  types: {
    LOAD_DATA_START,
    LOAD_DATA_FINISHED,
    LOAD_DATA_FAILED,
    TOGGLE_FAVORITE,
    SEARCH
  },
  creators: {
    loadDataStart,
    loadDataFinished,
    loadDataFailed,
    toggleFavorite,
    search
  }
};
