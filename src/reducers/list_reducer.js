import {
  GET_LIST_REQUEST,
  GET_LIST_COMPLETE,
  GET_LIST_ERROR,
} from '../actions/types';

const initialState = {
  loading: true,
  elements: [],
  search: ''
}

export default function (state = initialState, {type, payload}) {
  switch(type){
    case GET_LIST_REQUEST:
      return payload;
    case GET_LIST_COMPLETE:
      return payload;
    case GET_LIST_ERROR:
      return payload;
    default:
      return state;
  }
}