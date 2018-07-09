import favoriteActions from '../actions/favorite';
import initialState from '../store/state';

const favoriteReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favoriteActions.types.FAVORITE_ADD: {
      const { gif } = payload;
      const newState = { ...state };
      newState[gif.id] = { ...gif };
      newState[gif.id].liked = true;
      
      return newState;
    }
    case favoriteActions.types.FAVORITE_REMOVE: {
      const { gif } = payload;

      const newState = { ...state };
      delete newState[gif.id];

      return newState;
    }
    default:
      return state;
  }
};

export default favoriteReducer;
