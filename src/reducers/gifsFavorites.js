import * as types from '../constants/actionTypes';
import _localStorage from '../localStorage';

const getLocalStorage = () => {
  if(window.localStorage) return localStorage;
  return _localStorage;
}

const _favs = JSON.parse(getLocalStorage().getItem('favorites') || '[]');
const initialState = {
  favorites: _favs,
  textFilter: '',
};

const gifsFavorites = (state = initialState, action) => {
  const { type, gif } = action;
  switch (type) {
    case types.GIF_FAVORITE_ADD: {
      const newState = { ...state };
      const favorites = [...newState.favorites];
      if (!favorites.find(x => x.id == gif.id)) favorites.push(gif);
      newState.favorites = favorites;
      getLocalStorage().setItem('favorites', JSON.stringify(newState.favorites));
      return newState;
    }
    case types.GIF_FAVORITE_REMOVE: {
      const newState = { ...state };
      const favorites = [...newState.favorites];
      let indexDelete = -1;
      favorites.map((item, index) => {
        if (item.id == gif.id) indexDelete = index;
      });
      if (indexDelete > -1) favorites.splice(indexDelete, 1);
      newState.favorites = favorites;
      getLocalStorage().setItem('favorites', JSON.stringify(newState.favorites));
      return newState;
    }
    case types.GIF_UPDATE_TEXT_FILTER: {
      const newState = { ...state };
      newState.textFilter = action.searchQuery;
      return newState;
    }
    default:
      return state;
  }
};

export default gifsFavorites;