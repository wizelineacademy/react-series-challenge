const SEARCH_REQUEST = 'search_request';
const SEARCH_FAILED = 'search_failed';
const SEARCH_COMPLETED = 'search_completed'

const search = (q) => ({
  type: SEARCH_REQUEST,
  q: q
});
const searchCompleted = (gifs) => ({
  type: SEARCH_COMPLETED,
  gifs,
});
const searchFailed = (error) => ({ type: SEARCH_FAILED, error });


export default {
  types: {
    SEARCH_REQUEST,
    SEARCH_FAILED,
    SEARCH_COMPLETED,
  },
  creators: {
    search,
    searchCompleted,
    searchFailed,
  },
};


