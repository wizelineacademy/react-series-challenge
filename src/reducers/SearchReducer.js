import searchGifsActions from "../actions/searchGifs";

const initialState = {
  searchGifs: []
};

const cryptoPricesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case searchGifsActions.types.FETCH_SEARCH_GIFS: {
      const searchGifs = payload;
      console.log(searchGifs);
      return { ...state, searchGifs };
    }
    default:
      return state;
  }
};

export default cryptoPricesReducer;
