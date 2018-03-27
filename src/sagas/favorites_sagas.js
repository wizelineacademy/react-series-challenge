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
const getFromStorage = (item) => window.localStorage.getItem(item);
const deleteFromArray = (arr, ind) => {
  const partOne = arr.slice(0, ind);
  const partTwo = arr.slice((ind + 1), arr.length);
  return [ ...partOne, ...partTwo]
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
    
    const elements = storedFavorites !== null ? [...storedFavorites] : [];

    const filter = yield select(({ favorites }) => favorites.filter);
    
    const auxList = filter === '' ? [ ...elements ] : [];
    
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
  const item = payload;
  
  const oldElements = yield select(({ favorites }) => favorites.elements);
  

  const index = oldElements.findIndex(({image}) => item.image.id === image.id)

  

  const elements = index === -1 ? [...oldElements, item] : yield call(deleteFromArray, oldElements, index);

  

  const newElementsString = JSON.stringify(elements);
  
  yield call([localStorage, 'setItem'], 'reactFavorites', newElementsString);

  const page = yield select(({ favorites }) => favorites.paginator.currentPage );
  
  yield put(actions.getFavorites(page));
  

}

export default function* homeSaga () {
  yield takeLatest(LOAD_FAVORITES, loadFavoritesSaga);
  yield takeEvery(GET_NEXT_FAVORITES_PAGE, getNextFavoritesPage);
  yield takeEvery(GET_PREV_FAVORITES_PAGE, getPrevFavoritesPage);
  yield takeEvery(GET_FAVORITES_REQUEST, getFavoritesSaga);
  yield takeEvery(ADD_REMOVE_FAVORITES, addRemoveSaga);
}