import { takeLatest, call, put } from 'redux-saga/effects';
import homeActions from './actions';
import api from '../../services/api';

const { TRENDING_GIFS_LOAD, GIFS_SEARCH } = homeActions.types;
const { creators } = homeActions;

function* loadTrendingGifs() {
  try {
    yield put(creators.setLoading(true));
    const { data } = yield call(api.trending);
    yield put(creators.setGifs(data.data));
    console.log('data', data);
  } catch (e) {
    console.log('err', e);
  } finally {
    yield put(creators.setLoading(false));
  }
}

function* searchGifs(action) {
  try {
    yield put(creators.setLoading(true));
    const { data } = yield call(api.search, action.payload);
    yield put(creators.setGifs(data.data));
    console.log('data', data);
  } catch (e) {
    console.log('err', e);
  } finally {
    yield put(creators.setLoading(false));
  }
}

function* run() {
  yield takeLatest(TRENDING_GIFS_LOAD, loadTrendingGifs);
  yield takeLatest(GIFS_SEARCH, searchGifs);
}

export default {
  run,
};
