import favoriteGifs from '../actions/favoriteGifs';

const {
  FAVORITE_ADD_TO_STATE,
  FAVORITE_REMOVE_FROM_STATE,
  FAVORITE_HYDRATE,
} = favoriteGifs.types;

const initialState = {};

const favoriteGifsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FAVORITE_ADD_TO_STATE: {
      const { gif } = payload;
      const newState = { ...state };
      newState[gif.id] = { ...gif };
      return newState;
    }
    case FAVORITE_REMOVE_FROM_STATE: {
      const { gif } = payload;
      const newState = { ...state };
      delete newState[gif.id];
      return newState;
    }
    case FAVORITE_HYDRATE: {
      const { gifs } = payload;
      const newState = { ...gifs };
      return newState;
    }
    default:
      return state;
  }
};

export default favoriteGifsReducer;
