const GET_GIFS_REQUESTED = 'GET_GIFS_REQUESTED';
const GET_GIFS_COMPLETED = 'GET_GIFS_COMPLETED';
const GET_GIFS_FAILED = 'GET_GIFS_FAILED';
const GET_GIFS_LOCAL_REQUESTED = 'GET_GIFS_LOCAL_REQUESTED';
const GET_GIFS_LOCAL_COMPLETED = 'GET_GIFS_LOCAL_COMPLETED';
const GET_GIFS_LOCAL_FAILED = 'GET_GIFS_LOCAL_FAILED';
const LIKE_GIF = 'LIKE_GIF';
const UNLIKE_GIF = "UNLIKE_GIF"
const SEARCH_GIF_REQUESTED = "SEARCH_GIF_REQUESTED"
const SEARCH_GIF_COMPLETED = "SEARCH_GIF_COMPLETED"
const SEARCH_GIF_FAILED = "SEARCH_GIF_FAILED"
const SEARCH_GIF_LOCAL_REQUESTED = "SEARCH_GIF_LOCAL_REQUESTED"
const SEARCH_GIF_LOCAL_COMPLETED = "SEARCH_GIF_LOCAL_COMPLETED"
const SEARCH_GIF_LOCAL_FAILED = "SEARCH_GIF_LOCAL_FAILED"

const GET_ONE_GIF="GET_ONE_GIF"
const SET_QUERY = "SET_QUERY"

const getOneGif = id =>({
  type:GET_ONE_GIF,
  id
})
const setQuery = query => ({
  type: SET_QUERY,
  query
})

const getGifsRequested = () => ({
  type: GET_GIFS_REQUESTED,
});

const getGifsCompleted = gifs => ({
  type: GET_GIFS_COMPLETED,
  gifs,
});

const getGifsFailed = error => ({
  type: GET_GIFS_FAILED,
  error,
});

const getGifsLocalRequested = () => ({
  type: GET_GIFS_LOCAL_REQUESTED,
});

const getGifsLocalCompleted = gifs => ({
  type: GET_GIFS_LOCAL_COMPLETED,
  gifs,
});

const getGifsLocalFailed = error => ({
  type: GET_GIFS_LOCAL_FAILED,
  error,
});

const searchGifsRequested = (query) => ({
  type: SEARCH_GIF_REQUESTED,
  query
});

const searchGifsCompleted = gifs => ({
  type: SEARCH_GIF_COMPLETED,
  gifs,
});

const searchGifsFailed = error => ({
  type: SEARCH_GIF_FAILED,
  error,
});

const searchGifsLocalRequested = (query) => ({
  type: SEARCH_GIF_LOCAL_REQUESTED,
  query
});

const searchGifsLocalCompleted = gifs => ({
  type: SEARCH_GIF_LOCAL_COMPLETED,
  gifs,
});

const searchGifsLocalFailed = error => ({
  type: SEARCH_GIF_LOCAL_FAILED,
  error,
});

const likeGif = gif => ({
  type: LIKE_GIF,
  gif
})

const unlikeGif = gif => ({
  type: UNLIKE_GIF,
  gif
})

export default {
  types: {
    GET_GIFS_REQUESTED,
    GET_GIFS_COMPLETED,
    GET_GIFS_FAILED,
    LIKE_GIF,
    UNLIKE_GIF,
    SEARCH_GIF_REQUESTED,
    SEARCH_GIF_COMPLETED,
    SEARCH_GIF_FAILED,
    GET_GIFS_LOCAL_REQUESTED,
    GET_GIFS_LOCAL_COMPLETED,
    GET_GIFS_LOCAL_FAILED,
    SET_QUERY,
    SEARCH_GIF_LOCAL_REQUESTED,
    SEARCH_GIF_LOCAL_COMPLETED,
    SEARCH_GIF_LOCAL_FAILED,
    GET_ONE_GIF,
    

  },
  creators: {
    getGifsRequested,
    getGifsCompleted,
    getGifsFailed,
    searchGifsRequested,
    searchGifsCompleted,
    searchGifsFailed,
    likeGif,
    unlikeGif,
    getGifsLocalRequested,
    getGifsLocalCompleted,
    getGifsLocalFailed,
    setQuery,
    searchGifsLocalRequested,
    searchGifsLocalCompleted,
    searchGifsLocalFailed,
    getOneGif

  },
};

