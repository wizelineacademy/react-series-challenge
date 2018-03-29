import { CHANGE_INPUT } from '../actions/types';

const initialState = {
  inputString: ''
}

export default function (state = initialState, {type, payload}) {
  switch(type){
    case CHANGE_INPUT:
      const newSearchString = payload
      return { inputString: newSearchString };
    default:
      return state;
  }
}