import { call, takeEvery, put, select, takeLatest } from 'redux-saga/effects';
import actions from '../actions/index';
import {
  GET_CONTENT_REQUEST,
  GET_NEXT_CONTENT_PAGE,
  GET_PREV_CONTENT_PAGE,
  CHANGE_CONTENT_SEARCH
} from '../actions/types';

const API_KEY = 'api_key=OKx61MhM7wizGoKbk4z3GuDlN1LOAJxu';
const lim = 15;
const limit = 'limit=15';
const url = `http://api.giphy.com/v1/gifs/`;
const get = uri => fetch(uri).then(resp => resp.json());
const markFavorites = (elems, favs) => {
  return elems.map((item) => {
    return favs.findIndex((fav) => fav.id === item.id) > -1 ? { ...item, favorite: true } : { ...item, favorite: false };
  })
}

export function* setLoadingContentSaga(action) {
  try{
    const page = action.payload
    const offset = `offset=${lim * (page - 1)}`;
    const search = yield select(({ home }) => home.search)
    const fetchUrl = `${url}${search !== '' ? 'search' : 'trending'}?${API_KEY}&${limit}&${offset}${search !== '' ? `&q=${search.replace(/ /g, '+')}` : ''}`

    const resp = yield call(get, fetchUrl);
    
    const { data, pagination } = resp;
    const totalElements = pagination.total_count;
    const totalPages = Math.ceil(totalElements / lim);

    const paginator = {
      totalPages,
      currentPage: page,
      nextPage: (page + 1) < totalPages ? (page + 1) : totalPages,
      prevPage: (page - 1) > 1 ? (page - 1) : 1,
    }

    const favorites = yield select(({ favorites }) => favorites.elements);
    const pageElements = yield call(markFavorites, data, favorites);
    console.log(pageElements)

    yield put(actions.contentComplete({ data: pageElements, paginator }));

  }catch (error){
    console.group('Error: contentSaga');
    console.log(error);
    console.log(arguments);
    console.groupEnd();
    yield put(actions.contentError(error))
  }
}

export function* getNextContentPage() {
  const page = yield select(({home}) => home.paginator.nextPage)
  yield put(actions.getContent(page))
}

export function* getPrevContentPage() {
  const page = yield select(({home}) => home.paginator.prevPage)
  yield put(actions.getContent(page))
}

export function* changeSearch(action){
  yield put(actions.getContent(1))
}

export default function* homeSaga () {
  yield takeLatest(GET_CONTENT_REQUEST, setLoadingContentSaga);
  yield takeEvery(GET_NEXT_CONTENT_PAGE, getNextContentPage);
  yield takeEvery(GET_PREV_CONTENT_PAGE, getPrevContentPage);
  yield takeEvery(CHANGE_CONTENT_SEARCH, changeSearch);
}