const GET_GIFS_REQUESTED = 'GET_GIFS_REQUESTED';
const GET_GIFS_COMPLETED = 'GET_GIFS_COMPLETED';
const GET_GIFS_FAILED = 'GET_GIFS_FAILED';
const LIKE_GIF = 'LIKE_GIF';
const UNLIKE_GIF = "UNLIKE_GIF"
const SEARCH_GIF_REQUESTED = "SEARCH_GIF_REQUESTED"
const SEARCH_GIF_COMPLETED = "SEARCH_GIF_COMPLETED"
const SEARCH_GIF_FAILED = "SEARCH_GIF_FAILED"

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

  const likeGif = gif =>({
      type:LIKE_GIF,
      gif
  })

  const unlikeGif = gif =>({
      type:UNLIKE_GIF,
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
    
  },
};

