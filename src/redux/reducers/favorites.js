import favoriteActions from '../actions/favorites';
import { loadFavorites, saveFavorites } from '../store/localStorage';

const initialState = loadFavorites();

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case favoriteActions.types.ADD_FAVORITE: {
        newState[payload.id] = { ...payload };
        saveFavorites(newState);

        return newState;
    }
    case favoriteActions.types.DELETE_FAVORITE: {
      delete newState[payload.id];
      
      return newState;
  }

    default:
      return state;
  }
};

export default favoritesReducer;
