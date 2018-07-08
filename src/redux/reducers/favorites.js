import favoriteActions from '../actions/favorites';

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favoriteActions.types.ADD_FAVORITE: {
        const { gift } = payload;
        const newState = state;
        newState.push(gift);
        return newState;
    }

    default:
      return state;
  }
};

export default favoritesReducer;
