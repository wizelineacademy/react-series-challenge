import { all } from 'redux-saga/effects';
import trendingWatchers from './trending';

function * rootSaga () {
  yield all([
    ...trendingWatchers
  ]);
}

export default rootSaga;
