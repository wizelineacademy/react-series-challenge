import favoriteActions from '../actions/favorites';

const initialState = null;

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favoriteActions.types.ADD_FAVORITE: {
        console.log("----->", payload);
        // const { data } = payload;
        const newState = ""; 

        return newState;
    }

    default:
      return state;
  }
};

export default favoritesReducer;
