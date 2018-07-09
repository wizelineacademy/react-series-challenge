import favoriteActions from '../../actions/favorites';

const initialState = {
  isSearching: false,
  favoritesMatched: {},
};

const searchFavoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favoriteActions.types.SEARCH_FAVORITE: {
      const newState = { ...payload };

      return newState;
    }

    default:
      return state;
  }
};

export default searchFavoritesReducer;
