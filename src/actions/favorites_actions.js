import { createAction } from 'redux-actions';
import {
  GET_FAVORITES_REQUEST,
  // FILTER_FAVORITES
} from './types'

const getFavorites = createAction(GET_FAVORITES_REQUEST);
// const filterFavorites = createAction(FILTER_FAVORITES);

export default {
  getFavorites,
  // filterFavorites
}