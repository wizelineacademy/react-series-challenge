import { put, takeEvery } from 'redux-saga/effects';

// RedursDic
import actions from "../../constants/actions";
import selectors from "./../../selectors";


const loadData = () => {
  try {
    const key = process.env.LOCAL_STORAGE_KEY;

    // Check if .env file is empty
    if (key === '') throw new Error('CHECK .ENV FILE');

    return JSON.parse(window.localStorage.getItem(key) || '{}');
  } catch (error) {
    throw error;
  }
}

function* getLocalStorage() {
  console.log('Loading...');
  let data = loadData();
  yield put({ type: actions.LOCALSTORAGE_DATA, payload: { data } });
}

// function* setLocalStorage() {
//   try {
//     yield put({ type: actions.FETCH_START });

//     const word = yield select(selectors.fetch_word);


//     yield put({ type: actions.FETCH_DATA, payload: { data } });
//   } catch (error) {
//       yield put({ type: actions.FETCH_ERROR, payload: { error } });
//   }finally {
//       yield put({ type: actions.FETCH_END})
//   }
// }

export default function* watchLocalStorage() {
  yield takeEvery(actions.LOCALSTORAGE_GET, getLocalStorage);
  // yield takeEvery(actions.LOCALSTORAGE_SET, setLocalStorage);
}