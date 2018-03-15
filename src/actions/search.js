const REQUEST_SEARCH_GIFS = 'REQUEST_SEARCH_GIFS';
const REQUEST_SEARCH_GIFS_SUCCESS = 'REQUEST_SEARCH_GIFS_SUCCESS'
const REQUEST_SEARCH_GIFS_FAIL = 'REQUEST_SEARCH_GIFS_FAIL'

const SEARCH_FAVS = 'SEARCH_FAVS'
const SEARCH_FAVS_SUCCESS = 'SEARCH_FAVS_SUCCESS'

const SEARCH_GIF = 'SEARCH_GIF'
const SEARCH_GIF_SUCCESS = 'SEARCH_GIF_SUCCESS'
const requestSearchGifs = (payload = {}) => ({ type: REQUEST_SEARCH_GIFS, payload });
const requestSearchGifsSuccess = (payload = {}) => ({ type: REQUEST_SEARCH_GIFS_SUCCESS, payload })
const requestSearchGifsFail = (payload = {}) => ({ type: REQUEST_SEARCH_GIFS_FAIL, payload })

const searchFavs = (payload={}) => ({type: SEARCH_FAVS, payload})
const searchFavsSuccess = (payload={}) => ({ type: SEARCH_FAVS_SUCCESS, payload })

const searchGif = (payload={}) => ({type: SEARCH_GIF, payload})
const searchGifSuccess = (payload={}) => ({ type: SEARCH_GIF_SUCCESS, payload })


export default {
  types: {
    REQUEST_SEARCH_GIFS,
    REQUEST_SEARCH_GIFS_SUCCESS,
    REQUEST_SEARCH_GIFS_FAIL,
    SEARCH_FAVS,
    SEARCH_FAVS_SUCCESS,
    SEARCH_GIF,
    SEARCH_GIF_SUCCESS
  },
  creators: {
    requestSearchGifs,
    requestSearchGifsSuccess,
    requestSearchGifsFail,
    searchFavs,
    searchFavsSuccess,
    searchGif,
    searchGifSuccess
  },
};
