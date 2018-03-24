import { 
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_COMPLETE,
  GET_FAVORITES_ERROR
} from '../actions/types';

const initialState = {
  loading: true,
  elements: [],
};

export default function (state = initialState, { type, payload }) {
  switch(type){
    case GET_FAVORITES_REQUEST:
      return payload;
    case GET_FAVORITES_COMPLETE:
      return payload;
    case GET_FAVORITES_ERROR:
      return payload;
    default:
      return state;
  }
}