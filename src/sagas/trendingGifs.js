import { 
  call,
  takeEvery,
  put,
  select
} from 'redux-saga/effects';
import trendingGifs from '../actions/trendingGifs';
import giftService from '../giphy_sdk/gif';
import { getFavoriteGifs } from '../storage/favoriteGifs';

const { types } = trendingGifs;

const selectData2Send = (state) => {
  return {offset: state.trendingGifs.pagination.offset, q: state.trendingGifs.query};
};

const selectSelectedID = (state) => {
  return state.trendingGifs.selectedID;
};

const injectFavoriteMarked = (dataGifs, total_count=0) => {
  total_count = total_count === 0 ? 50000 : total_count;

  return new Promise((resolve) => {
    getFavoriteGifs({count: total_count})
      .then(({data: favorites}) => {
        const existInFav = (gif) => favorites.some(f => f.id === gif.id);
        dataGifs.forEach(gif => {
          if (existInFav(gif)) {
            gif.isFavorite = true;
          }
        });
        resolve(dataGifs);
      });
  });
};

export function* loadTrendingGifsSaga() {
  const { creators } = trendingGifs;
  // console.log('[SAGA] loadTrendingGifsSaga...');
  try {
    const data2Send = yield select(selectData2Send);
    let trendingGifsResponse = {};
    // console.log('​exportfunction*loadTrendingGifsSaga -> offset', offset);
    if (data2Send.q === '') {
      delete(data2Send.q);
      trendingGifsResponse = yield call(giftService.trending, data2Send );
    } else {
      trendingGifsResponse = yield call(giftService.search, data2Send );
    }

    yield call(
      injectFavoriteMarked,
      trendingGifsResponse.data,
      trendingGifsResponse.pagination.total_count
    );

    yield put(creators.getTrendingGifsCompleted(trendingGifsResponse));
  } catch (error) {
    console.log('loadTrendingGifsSaga catch -> error', error);
    yield put(creators.getTrendingGifsFailed(error.message));
  }
}

export function* loadGifSaga() {
  const { creators } = trendingGifs;
  // console.log('[SAGA] loadGifSaga...');
  try {
    const id = yield select(selectSelectedID);
    
    const gifResponse = yield call(giftService.getByID, id);
    
    yield call(injectFavoriteMarked, [gifResponse.data]);
    yield put(creators.getGifCompleted(gifResponse.data));
  } catch (error) {
    console.log('loadGifSaga catch -> error', error);
    yield put(creators.getGifFailed(error.message));
  }
}

export default function* trendingGifsSaga() {
  yield takeEvery(types.GET_TRENDING_GIFS_REQUESTED, loadTrendingGifsSaga);
  yield takeEvery(types.GET_GIF_REQUESTED, loadGifSaga);
}