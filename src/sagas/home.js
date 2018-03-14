import { call, put, takeLatest } from 'redux-saga/effects'

import {
  HOME_FETCH_INITIAL_GIPHS,
  HOME_FETCH_SEARCH_GIPHS,
  homeFetchSearchGifsSuccess,
  homeFetchInitialGifsSuccess,
  homeFetchInitialGifsFailed,
  homeFetchSearchFailed
} from '../actions'
import giphy from '../services/GIPHY'

export function * onFetchTrendingGiphies (action) {
  try {
    const response = yield call(giphy.trending.get)
    const body = yield response.json()
    yield put(homeFetchInitialGifsSuccess(body.data))
  } catch (error) {
    yield put(homeFetchInitialGifsFailed())
  }
}

export function * onFetchSearchGiphies (action) {
  try {
    const response = yield call(giphy.search.get, action.payload.query)
    const body = yield response.json()
    yield put(homeFetchSearchGifsSuccess(body.data))
  } catch (error) {
    yield put(homeFetchSearchFailed())
  }
}

export const homeWatchers = [
  takeLatest(HOME_FETCH_INITIAL_GIPHS, onFetchTrendingGiphies),
  takeLatest(HOME_FETCH_SEARCH_GIPHS, onFetchSearchGiphies)
]
