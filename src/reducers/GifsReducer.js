import trendingGifsActions from "../actions/trendingGifs";

const initialState = {
  gifs: []
};

const cryptoPricesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case trendingGifsActions.types.FETCH_TRENDING_GIFS: {
      const { gifs } = payload;
      return { ...state, gifs };
    }

    default:
      return state;
  }
};

export default cryptoPricesReducer;
