export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (gif) => ({
  type: TOGGLE_FAVORITE,
  payload: gif
});
