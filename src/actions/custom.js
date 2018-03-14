import { createAction } from 'redux-actions';

const FAVORITE_GIF = 'FAVORITE_GIF';
const favoriteGif    = createAction(FAVORITE_GIF);

export default {
  types: {
    FAVORITE_GIF
  },
  creators: {
    favoriteGif,
  },
};
