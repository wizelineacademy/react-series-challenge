import { SET_FAVORITES } from '../actions/types';

const initialState = {
  favorites: []
}

export default function (state = initialState, { type, payload }) {
  switch(type){
      // BEGINS: Refactor
    case SET_FAVORITES:
      const favorites  = [ ...payload ];
      return { favorites };
      // ENDS: Refactor

    default:
      return state;
  }
}