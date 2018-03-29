import { 
  GET_DETAILS_REQUEST,
  GET_DETAILS_COMPLETE,
  GET_DETAILS_ERROR
} from '../actions/types';

const initialState = {
  loading: true,
  image: {},
  err: false,
  errInfo: {}
};

export default function (state = initialState, { type, payload }) {
  switch(type){
    case GET_DETAILS_REQUEST:
      const requestState = { ...state, loading: true };
      return requestState;
    case GET_DETAILS_COMPLETE:
      const { image } = payload
      const completeState = {
        ...state,
        loading: false,
        image
      }
      return completeState;
    case GET_DETAILS_ERROR:
      const { er, errorInfo } = payload;
      const errorState = {
        ...state,
        err: true,
        errInfo : { er, errorInfo }
      }
      return errorState;
    default:
      return state;
  }
}