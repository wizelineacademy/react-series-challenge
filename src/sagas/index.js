import { put, takeEvery, all } from 'redux-saga/effects'
import * as actionTypes from '../actions'

function* getFavoriteGifs(action) {
  try {
    const response = yield JSON.parse(localStorage.getItem('favoriteGifs'))
    yield put(actionTypes.favoriteGifsData(response))
  } catch (error) {
    console.log(error)
  }
}

function* toogleFavorite(action) {
  const { item } = action

  const favoriteGifs = yield JSON.parse(localStorage.getItem('favoriteGifs'))

  let updateFavoriteGifs = !!favoriteGifs ? [...favoriteGifs] : []

  const index = updateFavoriteGifs.findIndex(gif => gif.id === item.id)

  if(index > -1) {
    updateFavoriteGifs = updateFavoriteGifs.filter(gif => gif.id !== item.id)
  } else {
    updateFavoriteGifs = updateFavoriteGifs.concat(item)
  }

  localStorage.setItem('favoriteGifs', JSON.stringify(updateFavoriteGifs))

  yield put(actionTypes.favoriteToggle())
}

function* watchFavoriteGifs() {
  yield takeEvery( actionTypes.FAVORITE_GIFS_INIT, getFavoriteGifs )
}

function* watchToggleFavorite(){
  yield takeEvery(actionTypes.FAVORITE_TOGGLE_START, toogleFavorite)
}

export default function* rootSaga() {
  yield all([
    watchFavoriteGifs(),
    watchToggleFavorite()
  ])
}