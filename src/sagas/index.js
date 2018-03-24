import { all } from 'redux-saga/effects';

import trengingSaga from '../sagas/trending';

export default function* rootSagas() {
    yield all([
        trengingSaga()
    ]);
};