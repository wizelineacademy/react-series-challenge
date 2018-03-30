import { call, takeEvery, put } from 'redux-saga/effects';
import actions from '../actions/index';

import {
  GET_DETAILS
} from '../actions/types';
import selectors from '../utils/selectors';

const API_KEY = 'api_key=OKx61MhM7wizGoKbk4z3GuDlN1LOAJxu';
const url = `http://api.giphy.com/v1/gifs/`;
const get = uri => fetch(uri).then(resp => resp.json());


export function* getDetailsSaga({ payload }, testsParams){
  const id = payload;
  const favorites =  testsParams ? testsParams.favorites : yield call(selectors.getFavorites);

  // Check if it is in favorites.
  const indexFavorites = favorites.findIndex((item) => item.id === id);
  
  // Check if it is in currentList
  const listState = testsParams ? testsParams.list : yield call(selectors.getPieceOfState, 'list');
  const content = [ ...listState.currentList ];
  const indexContent = content.findIndex((item) => item.id === id);
  
  let img = {}
  if(indexFavorites > -1 ){
    img = { ...favorites[indexFavorites], favorite: true };
  }else if(indexContent > -1){
    img = { ...content[indexContent], favorite: false };
  }else{
    // Fetch It
    const fetchUrl = `${url}${id}?${API_KEY}`;
    const response = yield call(get, fetchUrl)
    const { data } = testsParams ? testsParams.fetch : response;
    img = { ...data, favorite: false }

  }
  
  yield put(actions.setDetails({ ...img }));
  yield put(actions.setLoading(false));

}

export default function* detailsSagas () {
  yield takeEvery(GET_DETAILS, getDetailsSaga);
}