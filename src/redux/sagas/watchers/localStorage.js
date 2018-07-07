import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

// RedursDic
import reducersDic from "../../constants/reducersDic";

function* localStorage() {
  let data = {};
  console.log('Loading...');
  yield delay(1000);
  yield put({
    type: reducersDic.LOCALSTORAGE_DATA, payload: {
      data,
    }
  });
}

export default function* watchLocalStorage() {
  yield takeEvery(reducersDic.LOCALSTORAGE_GET, localStorage);
}