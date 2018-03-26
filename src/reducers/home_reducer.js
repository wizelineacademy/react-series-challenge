import {
  GET_CONTENT_COMPLETE,
  GET_CONTENT_REQUEST,
  GET_CONTENT_ERROR,
  CHANGE_CONTENT_SEARCH
} from '../actions/types';

const initialState = {
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
      console.log('--------')
      console.log(payload.json())
      console.log('--------')
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
      const newState = { ...state, loading: true };
      return newState;
    case GET_CONTENT_ERROR:
      const { er, errorInfo } = payload;
      const errorState = {
        ...state,
        err: true,
        errInfo : { er, errorInfo }
      }
      return errorState;
    case CHANGE_CONTENT_SEARCH:
      const { search } = payload
      const searchState = { ...state, search };
      return searchState;
    default:
      return state;
  }
}