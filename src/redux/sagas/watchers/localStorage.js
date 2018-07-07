import { put, takeEvery } from 'redux-saga/effects';

// RedursDic
import reducersDic from "../../constants/reducersDic";

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

function* localStorage() {
  console.log('Loading...');
  let data = loadData();
  yield put({ type: reducersDic.LOCALSTORAGE_DATA, data});
}

export default function* watchLocalStorage() {
  yield takeEvery(reducersDic.LOCALSTORAGE_GET, localStorage);
}