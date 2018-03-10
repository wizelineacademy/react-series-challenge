import axios from 'axios'
import { put, takeEvery, all } from 'redux-saga/effects'

import {FETCHED_TREND, FETCH_TREND} from '../actions/types'

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

function* watchFetchTrend() {
  yield takeEvery(FETCH_TREND, fetchTrend)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchFetchTrend()
  ])
}