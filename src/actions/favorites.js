import { createActions } from 'redux-actions';

const TOGGLE_FAVORITE_GIF = 'TOGGLE_FAVORITE_GIF';

const { toggleFavoriteGif } = createActions({
  [TOGGLE_FAVORITE_GIF]: (gif) => ({ gif }),
});

export {
  toggleFavoriteGif,
}

