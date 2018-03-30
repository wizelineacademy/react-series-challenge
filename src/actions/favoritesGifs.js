const ADD_GIF = 'ADD_GIF';
const REMOVE_GIF = 'REMOVE_GIF';
const FILTER_GIFS = 'FILTER_GIFS';
const FILTER_GIFS_CLEAR = 'FILTER_GIFS_CLEAR';

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

const filterGifsClear = () => ({
  type: FILTER_GIFS_CLEAR,
});

export default {
  types: {
    ADD_GIF,
    REMOVE_GIF,
    FILTER_GIFS,
    FILTER_GIFS_CLEAR
  },
  creators: {
    addGif,
    removeGif,
    filterGifs,
    filterGifsClear
  },
};