import paths from './paths'
import { getItem } from '../services/Storage'

export const updateFavoritesArray = (newFavorite, favorites) => {
  const index = favorites.indexOf(newFavorite)
  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(newFavorite)
  }
  return favorites
}

export const getFavsFromStorage = () => {
  const favoritesStorage = getItem('favorites')
  if (favoritesStorage) {
    return JSON.parse(favoritesStorage)
  } else {
    return []
  }
}

export {
  paths
}
