import * as actions from "../actions";
const favorite = {
  add: [],
};

const Favorites = (state = favorite.add, action) => {
  switch (action.type) {
    case actions.ADD_FAVORITES: {
      const newState = state || [];
      const { add } = action;
      const favoriteList = [...newState, add];

      localStorage.setItem('favorites', JSON.stringify(favoriteList));

      return favoriteList;
    }
    case actions.GET_FAVORITES: {
      return action.gifs;
    }
    case actions.DELETE_FAVORITES: {
      const newState = { ...action.get };
      let favoritesArray = [...state, newState];
      let i = 0;

      for (let len = favoritesArray.length; i < len; i += 1) {
        if (favoritesArray[i].id === action.id) break;
      }

      const deleteFavorite = [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ];

      localStorage.setItem('favorites', JSON.stringify(deleteFavorite));

      return deleteFavorite;
    }
    default:
      return state;
  }
}

export default Favorites;