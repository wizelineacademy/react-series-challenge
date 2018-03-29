import { call, takeEvery, put, takeLatest } from 'redux-saga/effects';
import actions from '../actions/index';
import {
  GET_NEW_CONTENT,
  SEARCH_CHANGE,
  UPDATE_CONTENT
} from '../actions/types';
import selectors from '../utils/selectors';
import { getData, getPaginator } from '../utils/general';


const markFavorites = (elems, favs) => {
  return elems.map((item) => {
    return favs.findIndex((fav) => fav.id === item.id) > -1 ? { ...item, favorite: true } : { ...item, favorite: false };
  })
}

export function* getNewContentSaga ({ payload }) {
  // Change loading state
  yield put(actions.setLoading(true))
  

  // Check the requiered endpoint (Search / Trending)

  const search = yield call(selectors.getInputString);
  const endpoint = search === '' ? 'trending' : 'search';
  const page = payload;

  // Fetch the data

  const resp = yield call(getData, { search, endpoint, page });
  const { data, pagination } = resp;

  // Get the nex paginator state
  
  const paginator = yield call(getPaginator, page, pagination.total_count);
  
  // Check which ones are part of the favorites.

  const favorites = yield call(selectors.getFavorites)
  const pageElements = yield call(markFavorites, data, favorites);

  // Set the new paginator state

  yield put(actions.setPaginator(paginator))

  // Get and Set the new currentList
  
  yield put(actions.setList(pageElements))

  // Change the loading

  yield put(actions.setLoading(false))


}

export function* updateContentSaga ({ payload }){
  const listState = yield call(selectors.getPieceOfState, 'list');
  const { currentList } = listState;
  const favorites = yield call(selectors.getFavorites);
  const pageElements = yield call(markFavorites, currentList, favorites);
  yield put(actions.setList(pageElements))

}

export default function* homeSaga () {
  yield takeLatest(GET_NEW_CONTENT, getNewContentSaga);
  yield takeEvery(UPDATE_CONTENT, updateContentSaga);
}