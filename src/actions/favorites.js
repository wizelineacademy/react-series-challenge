export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const addFavorite = (gif) => ({
  type: ADD_FAVORITE,
  payload: gif
});

export const removeFavorite = (gif) => ({
  type: REMOVE_FAVORITE,
  payload: gif
});

export const toggleFavorite = (gif) => ({
  type: TOGGLE_FAVORITE,
  payload: gif
});
