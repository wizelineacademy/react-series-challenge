export const getFavorites = ({ favorites }) => favorites;
export const getFavorite = (id, { favorites }) => favorites[id];
export const isFavorited = (id, { favorites }) => !!getFavorite(id, { favorites });
