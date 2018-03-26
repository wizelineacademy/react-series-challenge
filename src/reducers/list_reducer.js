import {
  GET_LIST_REQUEST,
  GET_LIST_COMPLETE,
  GET_LIST_ERROR,
  SET_CURRENT_LIST
} from '../actions/types';

const initialState = {
  currentList: [],
  paginator: {
    currentPage: 1,
    totalPages: 1,
  }
}

export default function (state = initialState, {type, payload}) {
  switch(type){
    case SET_CURRENT_LIST:
      const { elements, paginator } = payload
      const currentList = elements
      return { currentList, paginator };
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