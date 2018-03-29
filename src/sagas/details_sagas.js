import { call, takeEvery, put } from 'redux-saga/effects';
import actions from '../actions/index';

import {
  GET_DETAILS
} from '../actions/types';
import selectors from '../utils/selectors';

const API_KEY = 'api_key=OKx61MhM7wizGoKbk4z3GuDlN1LOAJxu';
const url = `http://api.giphy.com/v1/gifs/`;
const get = uri => fetch(uri).then(resp => resp.json());


export function* detailsFavoriteSaga ({ payload }) {
  const image = { ...payload };
  yield put(actions.addRemoveFavorites({ image }));
  yield put(actions.detailsRequest(image.id));
}

export function* getDetailsSaga({ payload }){
  const id = payload;
  const favorites = yield call(selectors.getFavorites);

  // Check if it is in favorites.
  const indexFavorites = favorites.findIndex((item) => item.id === id);
  
  // Check if it is in currentList
  const listState = yield call(selectors.getPieceOfState, 'list');
  const content = [ ...listState.currentList ];
  const indexContent = content.findIndex((item) => item.id === id);
  
  let img = {}
  if(indexFavorites > -1){
    img = { ...favorites[indexFavorites], favorite: true };
  }else if(indexContent > -1){
    img = { ...content[indexContent], favorite: false };
  }else{
    // Fetch It
    const fetchUrl = `${url}${id}?${API_KEY}`;
    const response = yield call(get, fetchUrl)
    const { data } = response;
    img = { ...data, favorite: false }
  
  }
  
  yield put(actions.setDetails({ ...img }));
  yield put(actions.setLoading(false));

}

export default function* detailsSagas () {
  yield takeEvery(GET_DETAILS, getDetailsSaga);
}