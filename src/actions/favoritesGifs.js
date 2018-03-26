const ADD_GIF = 'ADD_GIF';
const REMOVE_GIF = 'REMOVE_GIF';
const FILTER_GIFS = 'FILTER_GIFS';

const addGif = gif => ({
  type: ADD_GIF,
  payload: gif,
});

const removeGif = gifId => ({
  type: REMOVE_GIF,
  payload: gifId,
});

const filterGifs = filterWord => ({
  type: FILTER_GIFS,
  payload: filterWord,
});

export default {
  types: {
    ADD_GIF,
    REMOVE_GIF,
    FILTER_GIFS
  },
  creators: {
    addGif,
    removeGif,
    filterGifs
  },
};