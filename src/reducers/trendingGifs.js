import trendingGifs from '../actions/trendingGifs';

const { TRENDING_GET } = trendingGifs.types;

const initialState = {};

const trendingGifsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TRENDING_GET: {
      const { gifs } = payload;
      const newState = {};
      gifs.forEach((gif) => {
        newState[gif.id] = { ...gif };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default trendingGifsReducer;
