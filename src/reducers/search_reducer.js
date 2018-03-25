import { MODIFIED_SEARCH } from '../actions/types';

const initialState = {
  loading: true,
  elements: [],
  search: ''
}

export default function (state = initialState, {type, payload}) {
  switch(type){
    case MODIFIED_SEARCH:
      return payload;
    default:
      return state;
  }
}