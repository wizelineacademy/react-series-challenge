import { combineReducers, Action, Reducer } from 'redux';
import { FETCHED_TRENDING } from '../actions/gifs';

const initialState = {
  trending: [],
  favs: {}
}

function gifReducer(state = initialState, action: any) {
  const {type, payload} = action;

  switch (type) {
    case FETCHED_TRENDING:
      return {...state, trending: payload.data };
    default:
    return state;
  }
}

export default gifReducer;
