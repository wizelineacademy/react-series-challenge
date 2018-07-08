import * as actions from "../actions";

const searchGif = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_FAVORITES: {
      const newState = {...action.add};
      let favoritesArray = [...state, newState];

      localStorage.setItem('favorites', JSON.stringify(favoritesArray));

      return favoritesArray;
    }
    case actions.GET_FAVORITES: {
      const newState = {...action.get};
      let favoritesArray = [...state, newState];

      return favoritesArray;
    }
    default:
      return state;
  }
}
  
export default searchGif;