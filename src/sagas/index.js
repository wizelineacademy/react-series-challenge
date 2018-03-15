import { all } from 'redux-saga/effects';
import trendingWatchers from './trending';
import searchWatchers from "./search";

function * rootSaga () {
  yield all([
    ...trendingWatchers,
    ...searchWatchers
  ]);
}

export default rootSaga;
