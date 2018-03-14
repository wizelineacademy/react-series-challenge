import { createAction } from 'redux-actions';
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './types';

const addFavorite = createAction(ADD_FAVORITE);
const removeFavorite = createAction(REMOVE_FAVORITE);

export default {
  addFavorite,
  removeFavorite
}
