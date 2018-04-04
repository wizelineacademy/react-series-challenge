import { 
  call,
  takeEvery,
  put,
  select
} from 'redux-saga/effects';
import trendingGifs from '../actions/trendingGifs';
import giftService from '../giphy_sdk/gif';

export const getOffset = (state) => {
  return state.trendingGifs.pagination.offset;
};

export function* loadTrendingGifsSaga() {
  console.log('[SAGA] loadTrendingGifsSaga...');
  try {
    let offset = yield select(getOffset);
    console.log('​exportfunction*loadTrendingGifsSaga -> offset', offset);
    const trendingGifsResponse = yield call(giftService.trending, { offset } );
    // const trendingGifsResponse = yield call(giftService.trending);
    yield put(trendingGifs.creators.getTrendingGifsCompleted(trendingGifsResponse));
  } catch (error) {
    yield put(trendingGifs.creators.getTrendingGifsFailed(error), error);
  }
}

export default function* trendingGifsSaga() {
  yield takeEvery('GET_TRENDING_GIFS_REQUESTED', loadTrendingGifsSaga);
}