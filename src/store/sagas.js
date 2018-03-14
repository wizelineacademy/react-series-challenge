import { call, put, takeLatest } from 'redux-saga/effects'
import giphy from '../api/giphy'

function* fetchTrending (action) {
  yield put({ type: "LOADING_START" });
  try {
    const response = yield call(giphy.fetchTrending);
    yield put({type: "FETCH_SUCCEEDED", trendingGifs: response});
  } catch (e) {
    console.log('fail', e)
    yield put({type: "FETCH_FAILED", message: e.message});
  }
  yield put({ type: "LOADING_END" });
}

function* fetchById (action) {
  yield put({ type: "LOADING_START" });
  try {
    const response = yield call(giphy.fetchById, action.id);
    yield put({type: "FETCHED_SINGLE", singleGif: response});
  } catch (e) {
    console.log('fail', e)
    yield put({type: "FETCH_FAILED", message: e.message});
  }
  yield put({ type: "LOADING_END" });
}

function* fetchSearch (action) {
  yield put({ type: "LOADING_START" });
  try {
    const response = yield call(giphy.fetchSearch, action.query);
    yield put({type: "FETCHED_SEARCH", searchGifs: response});
  } catch (e) {
    console.log('fail', e)
    yield put({type: "FETCH_FAILED", message: e.message});
  }
  yield put({ type: "LOADING_END" });
}

function* fetchSaga() {
  yield takeLatest("FETCH_TRENDING", fetchTrending);
  yield takeLatest("FETCH_BY_ID", fetchById)
  yield takeLatest("FETCH_SEARCH", fetchSearch)
}

export default fetchSaga;
