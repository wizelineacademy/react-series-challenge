const SEARCH_GIFS_REQUESTED = 'SEARCH_GIFS_REQUESTED';
const SEARCH_GIFS_COMPLETED = 'SEARCH_GIFS_COMPLETED';
const SEARCH_GIFS_FAILED = 'SEARCH_GIFS_FAILED';

const searchGifsRequested = () => ({
  type: SEARCH_GIFS_REQUESTED,
});

const searchGifsCompleted = prices => ({
  type: SEARCH_GIFS_COMPLETED,
  payload: prices,
});

const searchGifsFailed = error => ({
  type: SEARCH_GIFS_FAILED,
  payload: error,
});

export default {
  types: {
    SEARCH_GIFS_REQUESTED,
    SEARCH_GIFS_COMPLETED,
    SEARCH_GIFS_FAILED,
  },
  creators: {
    searchGifsRequested,
    searchGifsCompleted,
    searchGifsFailed,
  },
};