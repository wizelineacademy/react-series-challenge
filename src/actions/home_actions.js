import { createAction } from 'redux-actions';
import {
  GET_TRENDING_REQUEST,
  GET_SEARCH_REQUEST,
} from './types'

const getTrending = createAction(GET_TRENDING_REQUEST);
const getSearch = createAction(GET_SEARCH_REQUEST);

export default {
  getTrending,
  getSearch
}