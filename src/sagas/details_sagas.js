import { call, takeEvery, put, select, takeLatest } from 'redux-saga/effects';
import actions from '../actions/index';

import {
  GET_DETAILS_COMPLETE,
  GET_DETAILS_ERROR,
  GET_DETAILS_REQUEST,
  ADD_REMOVE_FAVORITE_DETAILS
} from '../actions/types';

const API_KEY = 'api_key=OKx61MhM7wizGoKbk4z3GuDlN1LOAJxu';
const url = `http://api.giphy.com/v1/gifs/`;
const get = uri => fetch(uri).then(resp => resp.json());
const checkFavorite = (img, favorites) => {
  const index = favorites.findIndex((fav) => fav.id === img.id);
  const favorite = index > -1;
  return { ...img, favorite };
}

export function* detailsRequestSaga ({ payload }) {
  try{
    // console.log('Entra')
    const id = payload;
    const fetchUrl = `${url}${id}?${API_KEY}`;
    const resp = yield call(get, fetchUrl);

    const { data } = resp;
    const favorites = yield select(({ favorites }) => favorites.elements);
    const image = yield call(checkFavorite, data, favorites);
    yield put(actions.detailsComplete({ image }))
  }catch(e){
    console.log(e)
  }
}

export function* detailsFavoriteSaga ({ payload }) {
  const image = { ...payload };
  yield put(actions.addRemoveFavorites({ image }));
  yield put(actions.detailsRequest(image.id));
}

export default function* detailsSaga () {
  yield takeLatest(GET_DETAILS_REQUEST, detailsRequestSaga);
  yield takeEvery(ADD_REMOVE_FAVORITE_DETAILS, detailsFavoriteSaga);
}