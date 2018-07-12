import { queryFavError, queryFavSuccess, QUERY_FAV } from './action'
import serialize from '../../util/serialize';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
//require('../.env').config();
require('dotenv').config();

const API_KEY = 'Y354pcUIVTGZXofCIqvlYWA2Bv1khCCZ';

function* doQueryFav({ param = {} }) {
  const query = serialize({
    limit:10,
    api_key: API_KEY
  });
  const response = yield call([axios, 'get'], `https://api.giphy.com/v1/gifs/gifs?${query}`);
  if (response.error) {
    yield put(queryFavError(response.error));
    return;
  }
  yield put(queryFavSuccess(response.data));
}


export default function* queryFavWatcher() {
  yield takeLatest(QUERY_FAV, doQueryFav);
}