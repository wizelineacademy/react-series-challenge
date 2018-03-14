import { getQuery } from './search';

export const getFavorites = ({ favorites }) => favorites;
export const getFavorite = (id, { favorites }) => favorites[id];
export const isFavorited = (id, { favorites }) => !!getFavorite(id, { favorites });

export const getFavoritesArray = ({ favorites }) => Object.keys(favorites).map(key => favorites[key]);

export const getFilteredFavorites = (state) => {
  const favorites = getFavoritesArray(state);
  const query = getQuery(state);

  return favorites.filter(favorite => {
    return query.length < 0 || favorite.title.includes(query);
  });
};
