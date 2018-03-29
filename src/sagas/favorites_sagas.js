import { call, takeEvery, put, select, takeLatest } from 'redux-saga/effects';
import actions from '../actions/index';
import {
  LOAD_FAVORITES,
  GET_NEXT_FAVORITES_PAGE,
  GET_PREV_FAVORITES_PAGE,
  GET_FAVORITES_REQUEST,
  ADD_REMOVE_FAVORITES,
  CHANGE_FAVORITES_FILTER,
  FILTER_FAVORITES,
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
const getFromStorage = (item) => window.localStorage.getItem(item);
const deleteFromArray = (arr, ind) => {
  const partOne = arr.slice(0, ind);
  const partTwo = arr.slice((ind + 1), arr.length);
  return [ ...partOne, ...partTwo]
}

const deleteFromArrayR = (arr, ind) => {
  const aux = [ ...arr ];
  aux.splice(ind,1);
  return [ ...aux ]
}

const filterArray = (str, elements) => {
  return elements.filter(({ title }) => {
    const lowTitle = title.toLowerCase();
    const lowStr = str.toLowerCase();
    return lowTitle.includes(lowStr);
  })
}

export function* loadFavoritesSaga(){
  yield put(actions.getFavorites(1))
}

export function* getNextFavoritesPage() {
  const page = yield select(({ favorites }) => favorites.paginator.nextPage )
  yield put(actions.getFavorites(page))
}

export function* getPrevFavoritesPage() {
  const page = yield select(({ favorites }) => favorites.paginator.prevPage )
  yield put(actions.getFavorites(page))
}

export function* getFavoritesSaga(action){
  try{

    const page = action.payload
    
    const storedFavoritesString = yield call(getFromStorage, 'reactFavorites');
    
    const storedFavorites = storedFavoritesString ? JSON.parse(storedFavoritesString) : [];
    
    const elements = storedFavorites !== null ? [...storedFavorites] : storedFavorites.find()

    const filter = yield select(({ favorites }) => favorites.filter);
    
    const auxList = filter === '' ? [ ...elements ] : yield call(filterArray, filter, elements);
    
    const totalElements = auxList.length;
    
    const totalPages = Math.ceil(totalElements / lim);
    
    const paginator = {
      totalPages,
      currentPage: page,
      nextPage: (page + 1) < totalPages ? (page + 1) : totalPages,
      prevPage: (page - 1) > 1 ? (page - 1) : 1,
    }
    
    const startSlice = lim * (page - 1);
    
    const finalList = auxList.slice(startSlice, (startSlice + lim));
    
    const payload = { paginator, finalList, elements };
    
    yield put(actions.completeFavorites(payload));
  }catch (error){
    console.group('Error: favoriteSaga');
    console.log(error);
    console.log(arguments);
    console.groupEnd();
    yield put(actions.errorFavorites(error))
  }
}

export function* addRemoveSaga({ payload }){
  const item = { ...payload.image };
  
  const oldElements = yield select(({ favorites }) => favorites.elements);

  const index = oldElements.findIndex((image) => item.id === image.id)

  const elements = index === -1 ? [...oldElements, item] : yield call(deleteFromArray, oldElements, index);

  const newElementsString = JSON.stringify(elements);
  
  yield call([localStorage, 'setItem'], 'reactFavorites', newElementsString);

  const page = yield select(({ favorites }) => favorites.paginator.currentPage );
  
  yield put(actions.getFavorites(page));
}

export function* filterSaga() {
  yield put(actions.getFavorites(1));
}

export function* getFavoritesRSaga ({ payload }) {
  const page = payload;

  // Change loading state
  yield put(actions.setLoading, true)

  // Get favorites
  const favorites = yield call(selectors.getFavorites);

  // Check if it's needed to be filtered
  const filter = yield call(selectors.getInputString);

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

  yield put(actions.setLoading, false)

};

export function* loadFavoritesRSaga () {
  const storedFavoritesString = yield call(getFromStorage, 'reactFavorites');
    
  const storedFavorites = storedFavoritesString ? JSON.parse(storedFavoritesString) : [];

  yield put(actions.setFavorites(storedFavorites));
};

export function* filterChangeSaga({payload}) {
  const { value } = payload.target;
  yield put(actions.changeInput(value));
  yield put(actions.getFavoritesR(1))
}

export function* addRemoveFavoriteSaga({ payload }) {
  const img = { ...payload };
  const oldFavorites = yield call(selectors.getFavorites);

  // TODO separate this proccess to a function
  const index = oldFavorites.findIndex((image) => img.id === image.id)

  const elements = index === -1 ? [...oldFavorites, img] : yield call(deleteFromArrayR, oldFavorites, index);

  const newElementsString = JSON.stringify(elements);
  
  // Process Ends

  yield call([localStorage, 'setItem'], 'reactFavorites', newElementsString);

  yield call(actions.setFavorites(elements));

}

export function* addRemoveHomeSaga ({ payload }) {
  yield put(actions.addRemoveFavorite(payload));
  const page = yield call(selectors.getCurrentPage)
  yield put(actions.getNewContent(page));
}

export function* addRemoveViewSaga ({ payload }) {
  yield put(actions.addRemoveFavorite(payload));
  const page = yield call(selectors.getCurrentPage)
  yield put(actions.getFavoritesR(page));
}

export function* addRemoveDetailsSaga ({ payload }) {
  yield put(actions.addRemoveFavorite(payload));
  yield put(actions.getDetails(payload.id));
}

export default function* homeSaga () {
  yield takeLatest(LOAD_FAVORITES, loadFavoritesSaga);
  yield takeEvery(GET_NEXT_FAVORITES_PAGE, getNextFavoritesPage);
  yield takeEvery(GET_PREV_FAVORITES_PAGE, getPrevFavoritesPage);
  yield takeEvery(GET_FAVORITES_REQUEST, getFavoritesSaga);
  yield takeEvery(ADD_REMOVE_FAVORITES, addRemoveSaga);
  yield takeEvery(FILTER_FAVORITES, filterSaga);
  yield takeEvery(CHANGE_FAVORITES_FILTER, filterSaga);
  yield takeLatest(GET_FAVORITES, getFavoritesRSaga);
  yield takeLatest(LOAD_FAVORITESR,loadFavoritesRSaga)
  yield takeEvery(FILTER_CHANGE, filterChangeSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE, addRemoveFavoriteSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE_HOME, addRemoveHomeSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE_VIEW, addRemoveViewSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE_DETAILS_R, addRemoveDetailsSaga);
}