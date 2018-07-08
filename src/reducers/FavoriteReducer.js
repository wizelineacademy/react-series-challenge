import favoriteGifsActions from "../actions/favoriteGifs";

const initialState = {};

const cryptoPricesReducer = (state = initialState, action) => {
  const { type, gif } = action;
  switch (type) {
    case favoriteGifsActions.types.ADD_FAVORITE_GIF: {
      const newState = {...state};
      if (!newState[gif.id]) {
        newState[gif.id] = { ...gif };
      } else {
        delete newState[gif.id];
      }
      return newState;
    }
    default:
      return state;
  }
};

export default cryptoPricesReducer;
