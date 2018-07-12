import { put, takeEvery, all, call } from 'redux-saga/effects'
import * as actionTypes from '../actions'
import axios from 'axios'

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

function* fetchData(url) {

  return yield axios.get(url);
}

function* fetchingData(action) {
  const BASE_URL = process.env.REACT_APP_BASE_URL
  const API_KEY = process.env.REACT_APP_API_KEY
  let { query } = action

  const endpoint = !!query ? 'search' : 'trending'

  query = !!query ? `&q=${query}` : ''
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&limit=25${query}`;

  try {
    const data = yield call(fetchData, url)
    yield put(actionTypes.fetchDataSuccess(data))
  } catch (error) {
    console.log(error)
  }
}

function* watchFetchData() {
  yield takeEvery(actionTypes.FETCH_DATA_REQUEST, fetchingData)
}

function* watchToggleFavorite(){
  yield takeEvery(actionTypes.FAVORITE_TOGGLE_START, toogleFavorite)
}


export default function* rootSaga() {
  yield all([
    watchFavoriteGifs(),
    watchToggleFavorite(),
    watchFetchData()
  ])
}