const SEARCH_GIFS_REQUESTED = 'SEARCH_GIFS_REQUESTED';
const SEARCH_GIFS_COMPLETED = 'SEARCH_GIFS_COMPLETED';
const SEARCH_GIFS_FAILED = 'SEARCH_GIFS_FAILED';

const searchGifsRequested = term => ({
  type: SEARCH_GIFS_REQUESTED,
  payload: term,
});

const searchGifsCompleted = gifs => ({
  type: SEARCH_GIFS_COMPLETED,
  payload: gifs,
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