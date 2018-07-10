import searchActions from '../actions/search';
import initialState from '../store/state';

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case searchActions.types.SEARCH_GIFS_FETCHED: {
      const { gifs } = payload;

      let newState = {};
      gifs.map(gif => newState[gif.id] = { ...gif });
      return newState;
    }
    default:
      return state;
  }
};

export default searchReducer;
