import { call, put, takeLatest } from 'redux-saga/effects'

import { HOME_FETCH_INITIAL_GIPHS, homeFetchInitialGifsSuccess, homeFetchInitialGifsFailed} from '../actions'
import giphy from '../services/GIPHY'

function * onFetchTrendingGiphies (action) {
  try {
    const response = yield call(giphy.trending.get)
    const body = yield response.json()
    yield put(homeFetchInitialGifsSuccess(body.data))
  } catch (error) {
    yield put(homeFetchInitialGifsFailed())
  }
}


export const homeWatchers = [takeLatest(HOME_FETCH_INITIAL_GIPHS, onFetchTrendingGiphies)]
