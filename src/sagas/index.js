import { all } from 'redux-saga/effects';

import giphySaga from '../sagas/giphy';

export default function* rootSagas() {
    yield all([
        giphySaga()
    ]);
};