import { call, put, takeLatest } from 'redux-saga/effects'
import giphy from '../api/giphy'

function* fetchTrending (action) {
  console.log('fetch trending')
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
  console.log('fetch trending')
  yield put({ type: "LOADING_START" });
  try {
    // const response = yield call(giphy.fetchTrending);
    const response = yield call(giphy.fetchById, action.id);
    console.log('success', response)
    yield put({type: "FETCHED_SINGLE", singleGif: response});
  } catch (e) {
    console.log('fail', e)
    yield put({type: "FETCH_FAILED", message: e.message});
  }
  yield put({ type: "LOADING_END" });
}

function* fetchSaga() {
  yield takeLatest("FETCH_TRENDING", fetchTrending);
  yield takeLatest("FETCH_BY_ID", fetchById)
}

export default fetchSaga;
