import { createAction } from 'redux-actions';
import {
  GET_DETAILS_REQUEST,
  GET_DETAILS_COMPLETE,
  GET_DETAILS_ERROR,
  ADD_REMOVE_FAVORITE_DETAILS,
  GET_DETAILS,
  SET_DETAILS,
  ADD_REMOVE_FAVORITE_DETAILS_R
} from './types'

export const detailsRequest = createAction(GET_DETAILS_REQUEST);
export const detailsComplete = createAction(GET_DETAILS_COMPLETE);
export const detailsError = createAction(GET_DETAILS_ERROR);
export const toogleFavoriteDetails = createAction(ADD_REMOVE_FAVORITE_DETAILS);

// BEGINS: Refactor
export const getDetails = createAction(GET_DETAILS);
export const setDetails = createAction(SET_DETAILS);
export const addRemoveFavoriteR = createAction(ADD_REMOVE_FAVORITE_DETAILS_R);

export default {
  detailsRequest,
  detailsComplete,
  detailsError,
  toogleFavoriteDetails
}