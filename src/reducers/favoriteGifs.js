import favoriteGifs from '../actions/favoriteGifs';

const {
  FAVORITE_ADD,
  FAVORITE_REMOVE,
} = favoriteGifs.types;

const initialState = {};

const favoriteGifsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FAVORITE_ADD: {
      const { gif } = payload;
      const newState = { ...state };
      newState[gif.id] = { ...gif };
      return newState;
    }
    case FAVORITE_REMOVE: {
      const { gif } = payload;
      const newState = { ...state };
      delete newState[gif.id];
      return newState;
    }
    default:
      return state;
  }
};

export default favoriteGifsReducer;
