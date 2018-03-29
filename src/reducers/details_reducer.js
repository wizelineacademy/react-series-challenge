import { SET_DETAILS } from '../actions/types';

const initialState = {
  detailsImage: {}
};

export default function (state = initialState, { type, payload }) {
  switch(type){
      // BEGINS: Refactor.
    case SET_DETAILS:
      const detailsImage = { ...payload };
      return { detailsImage };
      // ENDS: Refactor.
      
    default:
      return state;
  }
}