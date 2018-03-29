import { 
  GET_DETAILS_REQUEST,
  GET_DETAILS_COMPLETE,
  GET_DETAILS_ERROR,
  SET_DETAILS
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

      // BEGINS: Refactor.
    case SET_DETAILS:
      const detailsImage = { ...payload };
      return { detailsImage };
      // ENDS: Refactor.
      
    default:
      return state;
  }
}