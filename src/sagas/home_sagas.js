import { call, takeEvery, put, select } from 'redux-saga/effects';
import actions from '../actions/index';
import { GET_CONTENT_REQUEST } from '../actions/types';

const API_KEY = 'api_key=OKx61MhM7wizGoKbk4z3GuDlN1LOAJxu';
const lim = 15;
const limit = 'limit=15';
const url = 'http://api.giphy.com/v1/gifs/';

export function* setLoadingContentSaga(action) {
  try{
    const page = action.payload
    const offset = `offset=${lim * (page - 1)}`;
    const search = select(({home}) => home.search)
    const fetchUrl = `${url}${search !== '' ? 'search' : 'trending'}?${API_KEY}&${limit}&${offset}${search !== '' ? `q=${search}` : ''}`

    const resp = yield call(fetch, fetchUrl);
    yield put(actions.contentComplete(resp));

  }catch (error){
    console.group('Error: contentSaga');
    console.log(error);
    console.log(arguments);
    console.groupEnd();
    yield put(actions.contentError(error))
  }
}

export default function* homeSaga () {
  yield takeEvery(GET_CONTENT_REQUEST, setLoadingContentSaga);
}