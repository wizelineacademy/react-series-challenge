import {
  queryTrendingError,
  queryTrendingSuccess,
  QUERY_TRENDING
} from './action'
import serialize from '../../util/serialize'
import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* doQueryTrending({ param = {} }) {

  const query = serialize({
    limit:25,
    api_key: 'FUzMhhnPstdHnTImlV219s1qvwRk4y0v'
  });
  const response = yield call([axios, 'get'], `https://api.giphy.com/v1/gifs/trending?${query}`);
  if (response.error) {
    yield put(queryTrendingError(response.error));
    return;
  }
  yield put(queryTrendingSuccess(response.data));
}


export default function* queryTrendingWatcher() {
  yield takeLatest(QUERY_TRENDING, doQueryTrending);
}