import initialState from './initialState';
import actions from "../actions";

const { TRENDING_FETCHED } = actions.types;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_FETCHED:
      var newState = { ...state };
      newState['trendingGifs'] = action.payload.data.map((gif) => ({
        url: gif.images.original.url,
        id: gif.id
      }));
      return newState;
    default:
      return state;
  }
}

export default rootReducer;