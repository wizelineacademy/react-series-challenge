import { call, put, takeLatest } from 'redux-saga/effects'

const Api = {
  fetchUser: () => {
    return new Promise( (resolve, reject) => {
      console.log('fetching user')
      setTimeout(() => {
        console.log('fetched user')
        resolve(5)
      }, 2000)
    })
  }
}

function* fetchTrending (action) {
  console.log('fetch trending')
  try {
    const user = yield call(Api.fetchUser);
    // const user = yield call(Api.fetchUser, action.payload.userId);
    console.log('success')
    yield put({type: "FETCH_SUCCEEDED", user: user});
  } catch (e) {
    console.log('fail', e)
    yield put({type: "FETCH_FAILED", message: e.message});
  }
}

function* fetchSaga() {
  yield takeLatest("FETCH_TRENDING", fetchTrending);
}

export default fetchSaga;
