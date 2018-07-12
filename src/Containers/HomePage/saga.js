import {
  queryTrendingError,
  queryTrendingSuccess,
  QUERY_TRENDING
} from './action'
import serialize from '../../util/serialize'
import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

export function* doQueryTrending() {

  const query = serialize({
    limit:25,
    api_key: process.env.REACT_APP_API_KEY
  });
  const response = yield call([axios, 'get'], `${process.env.REACT_APP_API_URL}trending?${query}`);
  if (response.error) {
    yield put(queryTrendingError(response.error));
    return;
  }
  yield put(queryTrendingSuccess(response.data));
}

export default function* queryTrendingWatcher() {
  yield takeLatest(QUERY_TRENDING, doQueryTrending);
}