import {
  GET_CONTENT_COMPLETE,
  GET_CONTENT_REQUEST,
  GET_CONTENT_ERROR,
  CHANGE_CONTENT_SEARCH_TYPE
} from '../actions/types';

const initialState = {
  loading: true,
  elements: [],
  search: '',
  paginator: {
    currentPage: 1,
    nextPage: 1,
    prevPage: 1,
    totalPages: 1
  },
  err: false,
  errInfo: {}
}

export default function (state = initialState, {type, payload}) {
  switch(type){
    case GET_CONTENT_COMPLETE:
      const {
        data,
        paginator,
      } = payload;
      return {
        ...state,
        loading: false,
        elements: data,
        paginator
      };
    case GET_CONTENT_REQUEST:
      const newState = { ...state, loading: false };
      return newState;
    case GET_CONTENT_ERROR:
      const { er, errorInfo } = payload;
      const errorState = {
        ...state,
        err: true,
        errInfo : { er, errorInfo }
      }
      return errorState;
    case CHANGE_CONTENT_SEARCH_TYPE:
      const search = payload.target.value
      const searchState = { ...state, search };
      return searchState;
    default:
      return state;
  }
}