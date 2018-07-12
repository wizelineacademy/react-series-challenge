import { call, takeEvery, put, takeLatest, select } from 'redux-saga/effects';
import actions from '../actions/index';
import { GET_MORE_GIFS, UPDATE_GIFS } from '../actions/types';
import selectors from '../utils/selectors';
import { fetchGifs } from '../utils/common';

const url = 'http://api.giphy.com/v1/gifs/';
const api_key = process.env.REACT_APP_GIPHY_API_KEY;
const limit = 10;

const markFavorites = (elemets, favorites) =>
  elemets.map(
    item =>
      favorites.findIndex(favorite => favorite.id === item.id) > -1
        ? { ...item, favorite: true }
        : { ...item, favorite: false }
  );

export function* getNewGifsSaga(testParams) {
  yield put(actions.setLoading(true));

  const search = testParams.search
    ? testParams.search
    : yield select(({ search }) => search.inputString);

  const endpoint = search === '' ? 'trending' : 'search';

  const response = testParams.resp
    ? testParams.resp
    : yield call(fetchGifs, {
        url,
        api_key,
        limit,
        endpoint,
        search,
      });

  const { data } = response;

  const favorites = testParams.favorites
    ? testParams.favorites
    : yield call(selectors.getFavorites);

  const elements = yield call(markFavorites, data, favorites);

  yield put(actions.setItemsList(elements));

  yield put(actions.setLoading(false));
}

export function* updateGifsSaga(testParams) {
  const itemsListState = testParams.list
    ? { ...testParams.list }
    : yield call(selectors.getPieceOfState, 'itemsList');

  const { currentItemsList } = itemsListState;

  const favorites = testParams.favorites
    ? [...testParams.favorites]
    : yield call(selectors.getFavorites);

  const elements = yield call(markFavorites, currentItemsList, favorites);

  yield put(actions.setItemsList(elements));
}

export default function* homeSaga() {
  yield takeLatest(GET_MORE_GIFS, getNewGifsSaga);
  yield takeEvery(UPDATE_GIFS, updateGifsSaga);
}
