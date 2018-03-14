export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavorite = element => (
  { type: TOGGLE_FAVORITE, payload: { element }}
);
