import { FETCH_TRENDING_GIPHYS_SUCCESS } from '../actions/action_types';

const DEFAULT_STATE = {
  giphys: []
};

export default function TrendingGiphysReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_TRENDING_GIPHYS_SUCCESS: {
      return {
        ...state,
        giphys: action.payload.data
      };
    }
    default:
      return state;
  }
}