import { 
  GET_DETAILS_REQUEST,
  GET_DETAILS_COMPLETE,
  GET_DETAILS_ERROR
} from '../actions/types';

const initialState = {
  loading: true,
  img: {}
};

export default function (state = initialState, { type, payload }) {
  switch(type){
    case GET_DETAILS_REQUEST:
      return payload;
    case GET_DETAILS_COMPLETE:
      return payload;
    case GET_DETAILS_ERROR:
      return payload;
    default:
      return state;
  }
}