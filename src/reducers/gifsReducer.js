import gifActions from '../actions/gifActions';

const initialState = [];

const gifsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case gifActions.types.SEARCH_GIFS_RECEIVED:
      return payload.gifs;

    case gifActions.types.TRENDING_GIFS_RECEIVED:
      return payload.gifs;

    default:
      return state;
  }
};

export default gifsReducer;
