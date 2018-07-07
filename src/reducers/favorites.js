import favoriteActions from "../actions/favorites";

const initialState = {};

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favoriteActions.types.FAVORITE_TOGGLE:
      const { item } = payload;

      const newState = { ...state };
      if (item.id in newState) {
        delete newState[item.id];
      } else {
        newState[item.id] = { ...item };
      }

      return newState;
    default:
      return state;
  }
};

export default favoritesReducer;
