import { all } from 'redux-saga/effects';

import giphySaga from '../sagas/giphy';
import favoritesSaga from '../sagas/favorites';

export default function* rootSagas() {
    yield all([
        giphySaga(),
        favoritesSaga()
    ]);
};