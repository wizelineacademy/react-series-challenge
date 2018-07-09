import * as types from '../constants/actionTypes';

const initialState = {
  favorites: [],//JSON.parse(localStorage.getItem('favorites')) || [],
};

const gifsFavorites = (state = initialState, action) => {
  const { type, gif } = action;
  switch (type) {
    case types.GIF_FAVORITE_ADD: {
      const newState = { ...state };
      if (!newState.favorites.find(x => x.id == gif.id)) {
        newState.favorites.push(gif);
      }
      return newState;
    }
    case types.GIF_FAVORITE_REMOVE: {
      const newState = { ...state };
      let indexDelete = -1;
      newState.favorites.map((item, index) => {
        if (item.id == gif.id) indexDelete = index;
      });
      if (indexDelete > -1) {
        newState.favorites.splice(indexDelete, 1);
      }
      return newState;
    }
    default:
      return state;
  }
};

export default gifsFavorites;