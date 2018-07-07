import favoriteGifsActions from "../actions/favoriteGifs";

const initialState = {
  fGifs: {}
};

const cryptoPricesReducer = (state = initialState, action) => {
  const { type, gif } = action;
  switch (type) {
    case favoriteGifsActions.types.ADD_FAVORITE_GIF: {
      const { fGifs } = state;
      if (!fGifs[gif.id]) {
        fGifs[gif.id] = gif;
      } else {
        delete fGifs[gif.id];
      }
      return { ...state, fGifs };
    }
    default:
      return state;
  }
};

export default cryptoPricesReducer;
