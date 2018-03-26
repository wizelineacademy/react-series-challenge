import { createAction } from 'redux-actions';
import {
  GET_CONTENT_COMPLETE,
  GET_CONTENT_REQUEST,
  GET_CONTENT_ERROR,
  CHANGE_CONTENT_SEARCH
} from './types'

export const getContent = createAction(GET_CONTENT_REQUEST);
export const contentComplete = createAction(GET_CONTENT_COMPLETE)
export const contentError = createAction(GET_CONTENT_ERROR)
export const changeSearch = createAction(CHANGE_CONTENT_SEARCH)

export default {
  getContent,
  contentComplete,
  contentError,
  changeSearch
}