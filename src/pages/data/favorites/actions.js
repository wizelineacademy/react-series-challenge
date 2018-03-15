export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const toggleFavorite = element => (
  { type: TOGGLE_FAVORITE, payload: { element }}
);

export const FILTER_FAVORITE = "FILTER_FAVORITE";
export const filterFavorites = text => (
  { type: FILTER_FAVORITE, payload: { text }}
);
