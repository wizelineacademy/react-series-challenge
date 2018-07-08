import { takeLatest, call, put, select } from 'redux-saga/effects';
import favoritesActions from './actions';
import api from '../../services/api';
import selectors from '../../selectors';

const { FAVORITES_LOAD } = favoritesActions.types;
const { creators } = favoritesActions;

function* loadFavorites() {
  try {
    yield put(creators.setLoadingFavorites(true));
    const favoritesIds = yield select(selectors.favoritesIdsSelector);
    console.log('favoritesIds', favoritesIds);
    if (favoritesIds.length > 0) {
      const { data } = yield call(api.gifs, { ids: favoritesIds });
      yield put(creators.setFavorites(data.data));
    }
  } catch (e) {
    console.log('err', e);
  } finally {
    yield put(creators.setLoadingFavorites(false));
  }
}

function* run() {
  yield takeLatest(FAVORITES_LOAD, loadFavorites);
}

export default {
  run,
};
