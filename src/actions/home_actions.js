import { createAction } from 'redux-actions';
import {
  GET_CONTENT_COMPLETE,
  GET_CONTENT_REQUEST,
  GET_CONTENT_ERROR,
  GET_NEXT_CONTENT_PAGE,
  GET_PREV_CONTENT_PAGE,
  CHANGE_CONTENT_SEARCH,
  CHANGE_CONTENT_SEARCH_TYPE,
  CONTENT_FAVORITE_BUTTON_CLICKED
} from './types'

export const getContent = createAction(GET_CONTENT_REQUEST);
export const getNextPage = createAction(GET_NEXT_CONTENT_PAGE);
export const getPrevPage = createAction(GET_PREV_CONTENT_PAGE);
export const contentComplete = createAction(GET_CONTENT_COMPLETE);
export const contentError = createAction(GET_CONTENT_ERROR);
export const changeSearch = createAction(CHANGE_CONTENT_SEARCH);
export const changeSearchType = createAction(CHANGE_CONTENT_SEARCH_TYPE);
export const contentFavoriteButton = createAction(CONTENT_FAVORITE_BUTTON_CLICKED);

export default {
  getContent,
  getNextPage,
  getPrevPage,
  contentComplete,
  contentError,
  changeSearch,
  changeSearchType,
  contentFavoriteButton
}