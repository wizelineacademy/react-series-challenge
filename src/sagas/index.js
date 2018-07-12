import { takeEvery, call, put, all } from 'redux-saga/effects'
import contentActions from '../actions/content'
import axios from 'axios'

const {
  CONTENT_START_LOADING,
  CONTENT_SEARCH_START,
} = contentActions.types

const {
  fetchedContent,
  fetchedContentError,
} = contentActions.actions

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

const fetchContent = () => {
  const url = `${API_URL}trending?api_key=${API_KEY}&limit=25&rating=G`
  return axios.get(url)
    .then(response => response)
}

const searchContent = (query) => {
  const url = `${API_URL}search?api_key=${API_KEY}&q=${query}&limit=25&rating=G`
  return axios.get(url)
    .then(response => response)
}

function* getContent(){
  try{
    const { data } = yield call(fetchContent)
    yield put(fetchedContent(data))
  } catch(e) {
    yield put(fetchedContentError(e))
  }
}

function* getSearchContent({ payload }) {
  try{
    const { data } = yield call(searchContent, payload)
    yield put(fetchedContent(data))
  } catch(e) {
    yield put(fetchedContentError(e))
  }
}

function* watchContentStartLoading() {
  yield takeEvery(CONTENT_START_LOADING, getContent)
}

function* watchContentStartSearch(params) {
  yield takeEvery(CONTENT_SEARCH_START, getSearchContent)
}

function* rootSaga () {
  yield all([
    watchContentStartLoading(),
    watchContentStartSearch(),
  ])
}

export default rootSaga
