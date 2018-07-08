import initialState from './initialState';
import actions from "../actions";

const { TRENDING_FETCHED, SEARCH_FETCHED } = actions.types;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_FETCHED:
      var newState = { ...state };
      newState['trendingGifs'] = action.payload.data.map((gif) => ({
        url: gif.images.fixed_height_downsampled.url,
        original: gif.images.original.url,
        id: gif.id
      }));
      return newState;
    case SEARCH_FETCHED:
      var newState = { ...state };
      newState['searchResults'] = action.payload.data.map((gif) => ({
        url: gif.images.fixed_height_downsampled.url,
        original: gif.images.original.url,
        id: gif.id
      }));
      newState['searchQuery'] = action.payload.query;
      return newState;
    default:
      return state;
  }
}

export default rootReducer;