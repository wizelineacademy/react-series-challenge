import { combineReducers, Action, Reducer } from 'redux';
import {
  FETCHED_TRENDING,
  TOGGLE_FAVORITE,
  FILTER_FAVS} from '../actions/gifs';

const initialState = {
  trending: [],
  favs: {}
}

function gifReducer(state = initialState, action: any) {
  const {type, payload} = action;

  if (!state.favs) state.favs = {}; // FIX: why it wasn't loading?

  switch (type) {
    case FETCHED_TRENDING:
      return {...state, trending: payload.data };
    case TOGGLE_FAVORITE: {
      const { id }   = payload;
      const newState = {...state};

      if (state.favs[id]) delete newState.favs[id];
      else newState.favs[id] = payload;

      return newState;
    }
    case FILTER_FAVS:
      return {...state, filter_favs: payload}
    default:
    return state;
  }
}

export default gifReducer;
