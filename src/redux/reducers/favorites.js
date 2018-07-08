import favoriteActions from '../actions/favorites';

const initialState = {};

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case favoriteActions.types.ADD_FAVORITE: {
        newState[payload.id] = { ...payload };
        
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
