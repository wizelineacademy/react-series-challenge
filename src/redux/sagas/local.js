import { put, takeEvery, select } from 'redux-saga/effects';

// actionsDic
import actionsDic from "../constants/actions";
import selectors from "./../selectors";

import actions from "./../actions";


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

export function* getLocalStorage() {
  let data = loadData();
  yield put(actions.localSetData(data));
  // TODO: ENABLE FIRST TIME SEARCH
  yield put(actions.fetchChange(''));
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

export function* localModifyStorage() {
  const local = yield select(selectors.local);
  setData(local);
}

export default function* watchLocalStorage() {
  yield takeEvery(actionsDic.LOCALSTORAGE_GET, getLocalStorage);
  yield takeEvery(actionsDic.LOCALSTORAGE_MODIFY, localModifyStorage);
}