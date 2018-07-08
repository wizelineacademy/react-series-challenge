import { call, takeEvery, put, takeLatest, select } from 'redux-saga/effects';
import actions from '../actions/index';
import { GET_MORE_GIFS, UPDATE_GIFS } from '../actions/types';
import selectors from '../utils/selectors';
import { fetchGifs } from '../utils/common';

const url = 'http://api.giphy.com/v1/gifs/';
const api_key = process.env.REACT_APP_GIPHY_API_KEY;
const limit = 10;

const markFavorites = async (elems, favs) =>
  elems.map(
    item =>
      favs.findIndex(fav => fav.id === item.id) > -1
        ? { ...item, favorite: true }
        : { ...item, favorite: false }
  );

export function* getNewGifsSaga() {
  yield put(actions.setLoading(true));

  const search = yield select(({ search }) => search.inputString);
  const endpoint = search === '' ? 'trending' : 'search';

  const response = yield call(fetchGifs, {
    url,
    api_key,
    limit,
    endpoint,
    search,
  });

  const { data } = response;

  const elements = yield call(markFavorites, data, favorites);

  yield put(actions.setList(elements));

  yield put(actions.setLoading(false));
}

export function* updateGifsSaga() {
  const itemsListState = yield call(selectors.getPieceOfState, 'list');
  const { currentItemsList } = itemsListState;
  const elements = yield call(markFavorites, currentItemsList, favorites);

  yield put(actions.setItemsList(elements));
}

export default function* homeSaga() {
  yield takeLatest(GET_MORE_GIFS, getNewContentSaga);
  yield takeEvery(UPDATE_GIFS, updateContentSaga);
}
