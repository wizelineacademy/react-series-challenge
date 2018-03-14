import { call, put, takeLatest } from 'redux-saga/effects'
import giphy from '../api/giphy'

function* fetchTrending (action) {
  console.log('fetch trending')
  yield put({ type: "LOADING_START" });
  try {
    const response = yield call(giphy.fetchTrending);
    // const user = yield call(Api.fetchUser, action.payload.userId);
    console.log('success', response)
    yield put({type: "FETCH_SUCCEEDED", trendingGifs: response});
  } catch (e) {
    console.log('fail', e)
    yield put({type: "FETCH_FAILED", message: e.message});
  }
  yield put({ type: "LOADING_END" });
}

function* fetchSaga() {
  yield takeLatest("FETCH_TRENDING", fetchTrending);
}

export default fetchSaga;
