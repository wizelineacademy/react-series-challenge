import customActions from '../actions/custom';

const favoritesData = localStorage.getItem('favorites');

const initialState = {
  favorites: JSON.parse(favoritesData) || [],
};

const giphyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case customActions.types.FAVORITE_GIF: {
      const favorites = state.favorites.splice(0);
      
      const index = favorites.indexOf(payload);
      if (index > -1) {
        favorites.splice(index, 1);
      } else {
        favorites.push(payload)
      } 
      localStorage.setItem('favorites', JSON.stringify(favorites));
      const newState = { favorites }

      return newState;
    }

    default:
      return state;
  }
};

export default giphyReducer;
