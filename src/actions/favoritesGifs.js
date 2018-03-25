const ADD_GIF = 'ADD_GIF';
const REMOVE_GIF = 'REMOVE_GIF';

const addGif = gif => ({
  type: ADD_GIF,
  gif,
});

const removeGif = gifId => ({
  type: REMOVE_GIF,
  gifId,
});

export default {
  types: {
    ADD_GIF,
    REMOVE_GIF,
  },
  creators: {
    addGif,
    removeGif,
  },
};