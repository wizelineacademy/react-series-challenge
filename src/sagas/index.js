import { all } from 'redux-saga/effects'; 

import watchTrendingGifsRequested from './trending';
import watchSearchGifsRequested from './search';

function* rootSaga () {
  yield all([
    watchTrendingGifsRequested(),
    watchSearchGifsRequested()
  ]);
}

export default rootSaga;