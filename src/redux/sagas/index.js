import { all } from 'redux-saga/effects';

// Watchers
import watchFetchData from './watchers/fetch';
import watchLocalStorage from './watchers/local';


export default function* rootSaga() {
    yield all([
        watchLocalStorage(),
        watchFetchData(),
    ]);
}