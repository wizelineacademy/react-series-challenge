const REQUEST_SEARCH_GIFS = 'REQUEST_SEARCH_GIFS';
const REQUEST_SEARCH_GIFS_SUCCESS = 'REQUEST_SEARCH_GIFS_SUCCESS'
const REQUEST_SEARCH_GIFS_FAIL = 'REQUEST_SEARCH_GIFS_FAIL'

const requestSearchGifs = (payload = {}) => ({ type: REQUEST_SEARCH_GIFS, payload });
const requestSearchGifsSuccess = (payload = {}) => ({ type: REQUEST_SEARCH_GIFS_SUCCESS, payload })
const requestSearchGifsFail = (payload = {}) => ({ type: REQUEST_SEARCH_GIFS_FAIL, payload })

export default {
  types: {
    REQUEST_SEARCH_GIFS,
    REQUEST_SEARCH_GIFS_SUCCESS,
    REQUEST_SEARCH_GIFS_FAIL
  },
  creators: {
    requestSearchGifs,
    requestSearchGifsSuccess,
    requestSearchGifsFail
  },
};
