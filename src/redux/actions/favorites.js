import { createAction } from 'redux-actions';

const ADD_FAVORITE = 'ADD_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';

const addFavorite = createAction(ADD_FAVORITE);
const deleteFavorite = createAction(DELETE_FAVORITE);

export default {
  types: {
    ADD_FAVORITE,
    DELETE_FAVORITE,
  },
  creators: {
    addFavorite,
    deleteFavorite,
  },
};
