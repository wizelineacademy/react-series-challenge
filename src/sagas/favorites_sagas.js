import { call, takeEvery, put, select, takeLatest } from 'redux-saga/effects';
import actions from '../actions/index';
import {
  LOAD_FAVORITES,
  GET_NEXT_FAVORITES_PAGE,
  GET_PREV_FAVORITES_PAGE,
  GET_FAVORITES_REQUEST,
  ADD_REMOVE_FAVORITES,
} from '../actions/types';

const lim = 15;
const get = uri => fetch(uri).then(resp => resp.json());

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
    const storedFavoritesString = yield call(localStorage.getItem, 'reactFavorites');
    const storedFavorites = JSON.parse(storedFavoritesString);
    const elements = storedFavorites || [];
    const search = yield select(({ favorites }) => favorites.filter);
    const auxList = search === '' ? [ ...elements ] : [];
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
  const { item } = payload;
  const oldElements = yield select(({ favorites }) => favorites.elements);
  const index = oldElements.findIndex((image) => item.id === image.id);
  
  const newElements = index === -1 ? [ ...oldElements, item] : [ ...(oldElements.slice(0,index)), ...(oldElements.slice((index + 1), oldElements.length))];

  yield call(localStorage.setItem, 'reactFavorites', JSON.stringify(newElements));

  const page = yield select(({ favorites }) => favorites.paginator.currentPage );
  yield put(actions.getFavorites(page));

}

export default function* homeSaga () {
  yield takeEvery(LOAD_FAVORITES, loadFavoritesSaga);
  yield takeEvery(GET_NEXT_FAVORITES_PAGE, getNextFavoritesPage);
  yield takeEvery(GET_PREV_FAVORITES_PAGE, getPrevFavoritesPage);
  yield takeEvery(GET_FAVORITES_REQUEST, getFavoritesSaga);
  yield takeEvery(ADD_REMOVE_FAVORITES, addRemoveSaga);
}