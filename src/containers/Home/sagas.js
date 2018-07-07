import { takeLatest, call, put } from 'redux-saga/effects';
import homeActions from './actions';
import api from '../../services/api';

const { TRENDING_GIFS_LOAD } = homeActions.types;
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

function* run() {
  yield takeLatest(TRENDING_GIFS_LOAD, loadTrendingGifs);
}

export default {
  run,
};
