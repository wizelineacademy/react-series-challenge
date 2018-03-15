export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const UPDATE_FILTERED_FAVORITES = 'UPDATE_FILTERED_FAVORITES';

export const toggleFavorite = (gif) => ({
  type: TOGGLE_FAVORITE,
  payload: gif
});

export const updateFilteredFavorites = (filteredFavorites) => ({
  type: UPDATE_FILTERED_FAVORITES,
  payload: filteredFavorites
});
