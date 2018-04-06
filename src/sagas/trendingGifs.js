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
  const { creators } = trendingGifs;
  // console.log('[SAGA] loadTrendingGifsSaga...');
  try {
    let offset = yield select(getOffset);
    // console.log('​exportfunction*loadTrendingGifsSaga -> offset', offset);
    const trendingGifsResponse = yield call(giftService.trending, { offset } );
    // console.log('​exportfunction*loadTrendingGifsSaga -> trendingGifsResponse', trendingGifsResponse);
    yield put(creators.getTrendingGifsCompleted(trendingGifsResponse));
  } catch (error) {
    // console.log('​}catch -> error', error);
    yield put(creators.getTrendingGifsFailed(error.message));
  }
}

export default function* trendingGifsSaga() {
  yield takeEvery('GET_TRENDING_GIFS_REQUESTED', loadTrendingGifsSaga);
}