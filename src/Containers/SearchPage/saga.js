import {
  querySearchError,
  querySearchSuccess,
  QUERY_SEARCH
} from './action'
import serialize from '../../util/serialize'
import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

export function* doQuerySearch({ param = {} }) {
  var q;
  param.q===""||param.q===undefined||param.q===null? q="pato":q=param.q;

  const query = serialize({
    limit:25,
    q,
    lang:"eng",
    offset:0,
    api_key: process.env.REACT_APP_API_KEY
  });
  const response = yield call([axios, 'get'], `${process.env.REACT_APP_API_URL}search?${query}`);
  if (response.error) {
    yield put(querySearchError(response.error));
    return;
  }
  yield put(querySearchSuccess(response.data));
}


export default function* querySearchWatcher() {
  yield takeLatest(QUERY_SEARCH, doQuerySearch);
}