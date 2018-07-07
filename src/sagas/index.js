import { takeEvery, call, put, all } from 'redux-saga/effects'
import contentActions from '../actions/content'
import axios from 'axios'

const {
  CONTENT_START_LOADING,
} = contentActions.types

const {
  fetchedContent,
  fetchedErrorContent,
} = contentActions.actions

const API_URL = 'https://api.giphy.com/v1/gifs/'
const API_KEY = 'LRB79OdJK91f2MQW8XLsq0oS1DZU5OmO'

const fetchContent = () => {
  const url = `${API_URL}trending?api_key=${API_KEY}&limit=25&rating=G`
  return axios.get(url)
    .then(response => response)

}

function* getContent(){
  try{
    const { data } = yield call(fetchContent)
    yield put(fetchedContent(data))
  } catch(e) {
    yield put(fetchedErrorContent(e))
  }
}
function* watchContentStartLoading() {
  yield takeEvery(CONTENT_START_LOADING, getContent)
}

function* rootSaga () {
  yield all([
    watchContentStartLoading(),
  ])
}

export default rootSaga
