import { FETCH_GIPHY_DETAIL_SUCCESS } from '../actions/action_types';

const DEFAULT_STATE = {
  giphy: null
} ;

export default function giphyDetailReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_GIPHY_DETAIL_SUCCESS: {
      return {...state, giphy: action.payload.data};
    }
    default:
      return state;
  }
}

