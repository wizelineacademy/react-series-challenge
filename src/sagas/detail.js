import { call, put, takeLatest } from 'redux-saga/effects'

import {
  DETAIL_FETCH_GIPH,
  detailFetchGiphSuccess,
  detailFetchGiphFailed
} from '../actions'
import giphy from '../services/GIPHY'

export function * onFetchById (action) {
  try {
    const response = yield call(giphy.byId.get, action.payload.id)
    const body = yield response.json()
    yield put(detailFetchGiphSuccess(body.data))
  } catch (error) {
    yield put(detailFetchGiphFailed())
  }
}

export const detailWatchers = [
  takeLatest(DETAIL_FETCH_GIPH, onFetchById)
]
