import { put, takeEvery, select } from 'redux-saga/effects';

// RedursDic
import actions from "../../constants/actions";
import selectors from "./../../selectors";


const loadData = () => {
  try {
    const key = process.env.LOCAL_STORAGE_KEY;

    // Check if .env file is empty
    if (key === '') throw new Error('CHECK .ENV FILE');

    const data = window.localStorage.getItem(key);

    if (!data) return {};

    return JSON.parse(data || '{}');
  } catch (error) {
    throw error;
  }
}

function* getLocalStorage() {
  let data = loadData();
  yield put({ type: actions.LOCALSTORAGE_DATA, payload: { data } });
  // TODO: ENABLE
  yield put({ type: 'FETCH_REQUEST', payload: { search: '' }});
}

const setData = (data) => {
  try {
    const key = process.env.LOCAL_STORAGE_KEY;

    // Check if .env file is empty
    if (key === '') throw new Error('CHECK .ENV FILE');

    return window.localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    throw error;
  }
}

function* modifyLocalStorage() {
  const local = yield select(selectors.local);
  setData(local);
}

export default function* watchLocalStorage() {
  yield takeEvery(actions.LOCALSTORAGE_GET, getLocalStorage);
  yield takeEvery(actions.LOCALSTORAGE_MODIFY, modifyLocalStorage);
}