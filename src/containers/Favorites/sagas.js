import { takeLatest, call, put, select } from 'redux-saga/effects';
import favoritesActions from './actions';
import api from '../../services/api';
import selectors from '../../selectors';

const { FAVORITES_LOAD, FAVORITE_ID_ADD } = favoritesActions.types;
const { creators } = favoritesActions;

function* loadFavorites() {
  try {
    yield put(creators.setLoadingFavorites(true));
    const favoritesIds = yield select(selectors.favoritesIdsSelector);
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

function* onFavoriteIdAdd() {
  const { path } = yield select(selectors.locationSelector);
  if (path === '/favorites') {
    yield call(loadFavorites);
  }
}

function* run() {
  yield takeLatest(FAVORITES_LOAD, loadFavorites);
  yield takeLatest(FAVORITE_ID_ADD, onFavoriteIdAdd);
}

export default {
  run,
  loadFavorites,
  onFavoriteIdAdd,
};
