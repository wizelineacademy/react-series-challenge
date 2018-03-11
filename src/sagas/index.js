import axios from 'axios'
import { put, takeEvery, all } from 'redux-saga/effects'

import {
  FETCHED_TREND,
  FETCH_TREND,
  ADD_FAVORITE,
  ADDED_FAVORITE,
  DELETE_FAVORITE,
  DELETED_FAVORITE
} from '../actions/types'

const API_KEY = 'rqQsxVnE0vVW4UVFNqfjHpgjMijSundV'
const BASE_URL = 'https://api.giphy.com'

function* helloSaga() {
  yield console.log('Hello Sagas!')
}

function* fetchTrend() {
  const PATH = '/v1/stickers/trending'
  const response = yield axios.get(
    `${BASE_URL}${PATH}`,
    {
      params: {
        api_key: API_KEY
      }
    }
  )
  yield put({
    type: FETCHED_TREND,
    payload: response.data.data
  })
}

function* AddingToFavorites(action) {
  yield put({
    type: ADDED_FAVORITE,
    payload: action.favorite
  })
}

function* deletingFromFavorites(action) {
  yield put({
    type: DELETED_FAVORITE,
    payload: action.favorite
  })
}

function* watchFetchTrend() {
  yield takeEvery(FETCH_TREND, fetchTrend)
}

function* watchAddFavorite() {
  yield takeEvery(ADD_FAVORITE, AddingToFavorites)
}

function* watchDeleteFavorite() {
  yield takeEvery(DELETE_FAVORITE, deletingFromFavorites)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchFetchTrend(),
    watchAddFavorite(),
    watchDeleteFavorite()
  ])
}