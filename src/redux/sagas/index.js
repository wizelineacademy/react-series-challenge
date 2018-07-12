import { all } from 'redux-saga/effects';

// Watchers
import watchFetchData from './fetch';
import watchLocalStorage from './local';


export default function* rootSaga() {
    yield all([
        watchLocalStorage(),
        watchFetchData(),
    ]);
}