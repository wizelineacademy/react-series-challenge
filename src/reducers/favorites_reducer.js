import { 
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_COMPLETE,
  GET_FAVORITES_ERROR,
  CHANGE_FAVORITES_FILTER,
  ADD_REMOVE_FAVORITES,
  SET_FAVORITES
} from '../actions/types';

const initialState = {
  elements: [],
  filter: '',
  finalList: [],
  paginator: {
    currentPage: 1,
    lastPage: 1,
    nextPage: 1,
    prevPage: 1,
    totalPages: 1
  },
  err: false,
  errInfo: {}
}

export default function (state = initialState, { type, payload }) {
  switch(type){
    case SET_FAVORITES:
      const { favorites } = payload
      const favoritesState = {
        ...state,
        elements: favorites
      };
      return favoritesState
    case GET_FAVORITES_REQUEST:
      const requestState = { ...state, loading: true }
      return requestState;
    case GET_FAVORITES_COMPLETE:  
      const { data, paginator } = payload
      const newState = {
        ...state,
        paginator,
        finalList: data
      }
      return newState;
    case GET_FAVORITES_ERROR:
      const { er, errorInfo } = payload;
      const errorState = {
        ...state,
        err: true,
        errInfo : { er, errorInfo }
      }
      return errorState;
    case CHANGE_FAVORITES_FILTER:
      const { filter } = payload
      const filterState = { ...state, filter };
      return filterState;
    case ADD_REMOVE_FAVORITES:
      const { elements } = payload;
      const newFavorites = {
        ...state,
        elements
      }
      return newFavorites;
    default:
      return state;
  }
}