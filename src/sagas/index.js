import { fork, all } from 'redux-saga/effects';
import { watchTrending, watchSearch, } from './wacher';

export default function* root() {
    yield all([fork(watchTrending), fork(watchSearch)]);
}