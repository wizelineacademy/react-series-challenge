import { call, takeEvery, put, takeLatest, select } from 'redux-saga/effects';
import actions from '../actions/index';
import {
  GET_NEW_CONTENT,
  UPDATE_CONTENT
} from '../actions/types';
import selectors from '../utils/selectors';
import { getData, getPaginator } from '../utils/general';


const markFavorites = async (elems, favs) => {
  return elems.map((item) => {
    return favs.findIndex((fav) => fav.id === item.id) > -1 ? { ...item, favorite: true } : { ...item, favorite: false };
  })
}

export function* getNewContentSaga ({ payload }, testParams) {
  // Change loading state
  yield put(actions.setLoading(true))
  

  // Check the requiered endpoint (Search / Trending)

  const search = testParams ? testParams.search : yield select(({search}) => search.inputString)
  const endpoint = search === '' ? 'trending' : 'search';
  const page = payload;

  // Fetch the data

  const resp = testParams ? testParams.resp : yield call(getData, { search, endpoint, page });
  const { data, pagination } = resp;

  // Get the nex paginator state
  
  const paginator = yield call(getPaginator, page, pagination.total_count);
  
  // Check which ones are part of the favorites.

  const favorites = testParams ? testParams.favorites : yield call(selectors.getFavorites)
  const pageElements = yield call(markFavorites, data, favorites);

  // Set the new paginator state

  yield put(actions.setPaginator(paginator))

  // Get and Set the new currentList
  
  yield put(actions.setList(pageElements))

  // Change the loading

  yield put(actions.setLoading(false))


}

export function* updateContentSaga (action, testParams){
  const listState = testParams ? { ...testParams.list } : yield call(selectors.getPieceOfState, 'list') 
  const { currentList } = listState;
  const favorites = testParams ? [ ...testParams.favorites ] : yield call(selectors.getFavorites);
  const pageElements = yield call(markFavorites, currentList, favorites);
  yield put(actions.setList(pageElements))

}

export default function* homeSaga () {
  yield takeLatest(GET_NEW_CONTENT, getNewContentSaga);
  yield takeEvery(UPDATE_CONTENT, updateContentSaga);
}