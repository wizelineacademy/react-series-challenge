import * as types from '../constants/actionTypes';

const initialState = {
  gifs: [],
};

const gifsFavorites = (state = initialState, action) => {
  // const { type, } = action;

  switch (action.type) {
    case types.GIF_FAVORITE_ADD: {
      const { gif } = action;
      const newState = { ...state };
      newState.gifs.push(gif);
      console.log(newState, "newState");
      return newState;
    }
    case types.GIF_FAVORITE_REMOVE: {
      const { gif } = action;
      const newState = { ...state };
      delete newState.gifs[gif.id];

      return newState;
    }
    default:
      return state;
  }
};

export default gifsFavorites;