import { SET_LIST } from '../actions/types';

const initialState = {
  currentList: []
}

export default function (state = initialState, {type, payload}) {
  switch(type){
    case SET_LIST:
      const currentList = [ ...payload ];
      return { currentList };
    default:
      return state;
  }
}