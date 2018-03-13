import { takeLatest, put, call } from 'redux-saga/effects'

import { removeItem, setItem } from '../services/Storage'
import { updateFavoritesArray, getFavsFromStorage } from '../utils'
import {
  FAVORITE_CLICK,
  FAVORITE_FETCH_INITIAL_GIFS,
  favoriteFetchInitialGifsSuccess,
  favoriteFetchInitialGifsFailed
} from '../actions'
import giphy from '../services/GIPHY'

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

function * fetchFavoritesIds (action) {
  try{
    const favorites = getFavsFromStorage()
    if (favorites.length > 0) {
      const response = yield call(giphy.byIds.get, favorites.join(','))
      const body = yield response.json()
      yield put(favoriteFetchInitialGifsSuccess(body.data))
    }
    yield
  } catch(error) {
    yield put(favoriteFetchInitialGifsFailed())
  }

}

export const favoritesWatchers = [
  takeLatest(FAVORITE_CLICK, onFavoriteClick),
  takeLatest(FAVORITE_FETCH_INITIAL_GIFS, fetchFavoritesIds)
]
