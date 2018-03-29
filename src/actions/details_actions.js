import { createAction } from 'redux-actions';
import {
  GET_DETAILS_REQUEST,
  GET_DETAILS_COMPLETE,
  GET_DETAILS_ERROR,
  ADD_REMOVE_FAVORITE_DETAILS
} from './types'

const detailsRequest = createAction(GET_DETAILS_REQUEST);
const detailsComplete = createAction(GET_DETAILS_COMPLETE);
const detailsError = createAction(GET_DETAILS_ERROR);
const toogleFavoriteDetails = createAction(ADD_REMOVE_FAVORITE_DETAILS);

export default {
  detailsRequest,
  detailsComplete,
  detailsError,
  toogleFavoriteDetails
}