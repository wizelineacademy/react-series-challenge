import { createAction } from 'redux-actions';

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const toggleFavorite = createAction(TOGGLE_FAVORITE);

export default {
  types: {
    TOGGLE_FAVORITE
  },
  creators: {
    toggleFavorite
  }
};
