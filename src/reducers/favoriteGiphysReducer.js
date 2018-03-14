import { TOGGLE_FAVORITE_GIPHY, FETCH_FAVORITE_GIPHYS_SUCCESS, UPDATE_FAVORITES_FILTER } from '../actions/action_types';
import { saveState, loadState } from '../utils/persistanceHelper';

const DEFAULT_STATE = {
  list: loadState('favoritesList', []),
  giphys: [],
  filter: ''
} ;

export default function favoriteGiphysReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE_GIPHY: {
      let list = [];
      const giphyIndex = state.list.indexOf(action.payload);
      if (giphyIndex !== -1) {
        list = [
          ...state.list.slice(0, giphyIndex),
          ...state.list.slice(giphyIndex + 1)
        ];
      } else {
        list = [...state.list, action.payload];
      }
      saveState('favoritesList', list);
      return {...state, list};
    }
    case FETCH_FAVORITE_GIPHYS_SUCCESS: {
      return {
        ...state,
        giphys: action.payload.data
      };
    }
    case UPDATE_FAVORITES_FILTER: {
      return {
        ...state,
        filter: action.payload
      }
    }
    default:
      return state;
  }
}
