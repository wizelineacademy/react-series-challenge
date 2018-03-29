import { call, takeEvery, put, select, takeLatest } from 'redux-saga/effects';
import actions from '../actions/index';

import {
  // GET_DETAILS_COMPLETE,
  // GET_DETAILS_ERROR,
  // GET_DETAILS_REQUEST,
  // ADD_REMOVE_FAVORITE_DETAILS,
  GET_DETAILS
} from '../actions/types';
import selectors from '../utils/selectors';

const API_KEY = 'api_key=OKx61MhM7wizGoKbk4z3GuDlN1LOAJxu';
const url = `http://api.giphy.com/v1/gifs/`;
const get = uri => fetch(uri).then(resp => resp.json());
const checkFavorite = (img, favorites) => {
  const index = favorites.findIndex((fav) => fav.id === img.id);
  const favorite = index > -1;
  return { ...img, favorite };
}

// export function* detailsRequestSaga ({ payload }) {
//   try{
//     // console.log('Entra')
//     const id = payload;
//     const fetchUrl = `${url}${id}?${API_KEY}`;
//     const resp = yield call(get, fetchUrl);

//     const { data } = resp;
//     const favorites = yield select(({ favorites }) => favorites.elements);
//     const image = yield call(checkFavorite, data, favorites);
//     yield put(actions.detailsComplete({ image }))
//   }catch(e){
//     console.log(e)
//   }
// }

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

export default function* detailsSaga () {
  // yield takeLatest(GET_DETAILS_REQUEST, detailsRequestSaga);
  // yield takeEvery(ADD_REMOVE_FAVORITE_DETAILS, detailsFavoriteSaga);
  yield takeEvery(GET_DETAILS, getDetailsSaga);
}