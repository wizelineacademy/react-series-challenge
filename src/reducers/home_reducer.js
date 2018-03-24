import {
  GET_TRENDING_REQUEST,
  GET_TRENDING_COMPLETE,
  GET_TRENDING_ERROR,
  GET_SEARCH_REQUEST,
  GET_SEARCH_COMPLETE,
  GET_SEARCH_ERROR
} from '../actions/types';

const initialState = {
  loading: true,
  elements: [],
  search: ''
}

export default function (state = initialState, {type, payload}) {
  switch(type){
    case GET_TRENDING_REQUEST:
      return payload;
    case GET_TRENDING_COMPLETE:
      return payload;
    case GET_TRENDING_ERROR:
      return payload;
    case GET_SEARCH_REQUEST:
      return payload;
    case GET_SEARCH_COMPLETE:
      return payload;
    case GET_SEARCH_ERROR:
      return payload;
    default:
      return state;
  }
}