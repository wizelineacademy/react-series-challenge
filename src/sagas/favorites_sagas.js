import { call, takeEvery, put, takeLatest, select } from 'redux-saga/effects';
import actions from '../actions/index';
import {
  GET_FAVORITES,
  LOAD_FAVORITESR,
  FILTER_CHANGE,
  ADD_REMOVE_FAVORITE,
  ADD_REMOVE_FAVORITE_HOME,
  ADD_REMOVE_FAVORITE_VIEW,
  ADD_REMOVE_FAVORITE_DETAILS_R
} from '../actions/types';
import { getPaginator } from '../utils/general';
import selectors from '../utils/selectors';

const lim = 15;
const getFromStorage = (item) => localStorage.getItem(item);

export const deleteFromArrayR = (arr, ind) => {
  const aux = [ ...arr ];
  aux.splice(ind,1);
  return [ ...aux ]
}

export const filterArray = (str, elements) => {
  return elements.filter(({ title }) => {
    const lowTitle = title.toLowerCase();
    const lowStr = str.toLowerCase();
    return lowTitle.includes(lowStr);
  })
}

export function* getFavoritesRSaga ({ payload }) {
  const page = payload;

  // Change loading state
  yield put(actions.setLoading(true))

  // Get favorites
  const favorites = yield call(selectors.getFavorites);

  // Check if it's needed to be filtered
  const filter = yield select(({search}) => search.inputString);

  // Filter if needed
  const auxFavorites = filter === '' ? [ ...favorites ] : yield call(filterArray, filter, favorites);

  // Get Paginator
  const totalElements = auxFavorites.length;
    
  const totalPages = Math.ceil(totalElements / lim);
  
  const paginator = yield call(getPaginator, page, totalPages);
  
  // Set Paginator
  yield put(actions.setPaginator(paginator))

  // Get and Set the new currentList
  
  const startSlice = lim * (page - 1);
  const finalList = auxFavorites.slice(startSlice, (startSlice + lim));
  yield put(actions.setList(finalList));

  // Change the loading

  yield put(actions.setLoading(false))

};

export function* loadFavoritesRSaga () {
  const storedFavoritesString = yield call(getFromStorage, 'reactFavorites');
    
  const storedFavorites = storedFavoritesString ? JSON.parse(storedFavoritesString) : [];

  yield put(actions.setFavorites(storedFavorites));
};

export function* filterChangeSaga({payload}) {
  yield put(actions.changeInput(payload));
  yield put(actions.getFavoritesR(1))
}

export function* addRemoveFavoriteSaga({ payload }, testParams) {
  
  const img = { ...payload.image };
  const oldFavorites = testParams ? [ ...testParams.favorites ] : yield call(selectors.getFavorites);
  // TODO separate this proccess to a function
  const index = oldFavorites.findIndex((image) => img.id === image.id);

  const elements = index === -1 ? [...oldFavorites, img] : yield call(deleteFromArrayR, oldFavorites, index);
  const newElementsString = JSON.stringify(elements);
  // Process Ends

  yield call([localStorage, 'setItem'], 'reactFavorites', newElementsString);

  yield put(actions.setFavorites(elements));

}

export function* addRemoveHomeSaga ({ payload }) {
  yield put(actions.addRemoveFavorite(payload));
  yield put(actions.updateContent(payload.index));
}

export function* addRemoveViewSaga ({ payload }, testParams) {
  yield put(actions.addRemoveFavorite(payload));
  const page = testParams ? testParams.page : yield call(selectors.getCurrentPage)
  yield put(actions.getFavoritesR(page));
}

export function* addRemoveDetailsSaga ({ payload }) {
  const image = { ...payload };
  yield put(actions.addRemoveFavorite({ image }));
  yield put(actions.getDetails(payload.id));
}

export default function* favoritesSagas () {
  yield takeLatest(GET_FAVORITES, getFavoritesRSaga);
  yield takeLatest(LOAD_FAVORITESR,loadFavoritesRSaga)
  yield takeEvery(FILTER_CHANGE, filterChangeSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE, addRemoveFavoriteSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE_HOME, addRemoveHomeSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE_VIEW, addRemoveViewSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE_DETAILS_R, addRemoveDetailsSaga);
}