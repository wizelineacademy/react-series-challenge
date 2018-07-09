import { call, takeEvery, put, takeLatest, select } from 'redux-saga/effects';
import actions from '../actions/index';
import {
  GET_FAVORITES,
  LOAD_FAVORITESR,
  FILTER_CHANGE,
  ADD_REMOVE_FAVORITE,
  ADD_REMOVE_FAVORITE_HOME,
  ADD_REMOVE_FAVORITE_VIEW,
  ADD_REMOVE_FAVORITE_DETAILS_R,
} from '../actions/types';
import selectors from '../utils/selectors';

const limit = 10;
const getFromStorage = item => localStorage.getItem(item);

//Fancy functions
const makeCopy = param => [...param];

const doSplice = (param, index) => param.splice(index, 1);
//End of Fancy functions

export const deleteFromArrayR = (arr, index) => {
  const auxiliar = [...arr];
  auxiliar.splice(index, 1);
  return [...auxiliar];
};

export const filterArray = (str, elements) => {
  return elements.filter(({ title }) => {
    const lowTitle = title.toLowerCase();
    const lowStr = str.toLowerCase();
    return lowTitle.includes(lowStr);
  });
};

export function* getFavoritesRSaga() {
  yield put(actions.setLoading(true));

  const favorites = yield call(selectors.getFavorites);

  const filter = yield select(({ search }) => search.inputString);

  const auxFavorites =
    filter === '' ? [...favorites] : yield call(filterArray, filter, favorites);

  const finalList = auxFavorites.slice(limit, limit + limit);

  yield put(actions.setItemsList(finalList));

  yield put(actions.setLoading(false));
}

export function* loadFavoritesRSaga() {
  const storedFavoritesString = yield call(getFromStorage, 'reactFavorites');

  const storedFavorites = storedFavoritesString
    ? JSON.parse(storedFavoritesString)
    : [];

  yield put(actions.setFavorites(storedFavorites));
}

export function* filterChangeSaga({ payload }) {
  yield put(actions.changeInput(payload));
  yield put(actions.getFavoritesR(1));
}
export function* addRemoveFavoriteSaga({ payload }) {
  const img = { ...payload.image };
  const oldFavorites = yield call(selectors.getFavorites);

  const index = oldFavorites.findIndex(image => img.id === image.id);

  const elements =
    index === -1
      ? [...oldFavorites, img]
      : yield call(deleteFromArrayR, oldFavorites, index);
  const newElementsString = JSON.stringify(elements);

  yield call([localStorage, 'setItem'], 'reactFavorites', newElementsString);
  yield call([localStorage, 'setItem'], 'reactFavorites', newElementsString);
}

export function* addRemoveHomeSaga({ payload }) {
  yield put(actions.addRemoveFavorite(payload));
  yield put(actions.updateContent(payload.index));
}

export function* addRemoveViewSaga({ payload }) {
  yield put(actions.addRemoveFavorite(payload));
}

export function* addRemoveDetailsSaga({ payload }) {
  const image = { ...payload };
  yield put(actions.addRemoveFavorite({ image }));
  yield put(actions.getDetails(payload.id));
}

export default function* favoritesSagas() {
  yield takeLatest(GET_FAVORITES, getFavoritesRSaga);
  yield takeLatest(LOAD_FAVORITESR, loadFavoritesRSaga);
  yield takeEvery(FILTER_CHANGE, filterChangeSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE, addRemoveFavoriteSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE_HOME, addRemoveHomeSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE_VIEW, addRemoveViewSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE_DETAILS_R, addRemoveDetailsSaga);
}
