import favoriteGifsActions from "../actions/favoriteGifs";

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case favoriteGifsActions.types.ADD_FAVORITE_GIF: {
      const newState = {...state};
      if (!newState[payload.id]) {
        newState[payload.id] = { ...payload };
      } else {
        delete newState[payload.id];
      }
      return newState;
    }
    default:
      return state;
  }
};

export default favoriteReducer;
