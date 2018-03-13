import { takeLatest } from 'redux-saga/effects'

import { removeItem, setItem } from '../services/Storage'
import { updateFavoritesArray, getFavsFromStorage } from '../utils'
import { FAVORITE_CLICK } from '../actions'

function * onFavoriteClick (action) {
  try {
    const favorites = getFavsFromStorage()
    const newFavorites = updateFavoritesArray(action.payload.id, favorites)
    removeItem('favorites')
    setItem('favorites', JSON.stringify(newFavorites))
    yield
  } catch(error) {
    yield
  }
}

export const favoritesWatchers = [
  takeLatest(FAVORITE_CLICK, onFavoriteClick)
]
