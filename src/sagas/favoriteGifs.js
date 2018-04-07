import { 
  call,
  takeEvery,
  put,
  select
} from 'redux-saga/effects';
import favoriteGifs from '../actions/favoriteGifs';
import trendingGifs from '../actions/trendingGifs';
import { getFavoriteGifs, addFavoriteGif } from '../storage/favoriteGifs';

const { types } = favoriteGifs;

const selectData2Send = (state) => {
  return {offset: state.favoriteGifs.pagination.offset, q: state.favoriteGifs.query};
};

const selectGif2Save = (state) => {
  return state.favoriteGifs.selected2Add;
};

export function* loadFavoriteGifsSaga() {
  const { creators } = favoriteGifs;
  
  try {
    const data2Send = yield select(selectData2Send);
    let favoriteGifsResponse = {};
    
    favoriteGifsResponse = yield call(getFavoriteGifs, data2Send);
    
    yield put(creators.getFavoriteGifsCompleted(favoriteGifsResponse));
  } catch (error) {
    console.log('loadFavoriteGifsSaga catch -> error', error);
    yield put(creators.getFavoriteGifsFailed(error.message));
  }
}

export function* addFavoriteGifSaga() {
  const { creators } = favoriteGifs;
  const { creators: trendingCreators } = trendingGifs;

  try {
    const gif2Save = yield select(selectGif2Save);
    let favoriteGifResponse = {};
    
    favoriteGifResponse = yield call(addFavoriteGif, gif2Save);
    yield put(creators.addFavoriteGifCompleted(favoriteGifResponse));
    yield put(trendingCreators.added2Favorites(favoriteGifResponse.id))
  } catch (error) {
    console.log('addFavoriteGifSaga catch -> error', error);
    yield put(creators.addFavoriteGifFailed(error.message));
  }
}

export default function* favoriteGifsSaga() {
  yield takeEvery(types.GET_FAVORITE_GIFS_REQUESTED, loadFavoriteGifsSaga);
  yield takeEvery(types.ADD_FAVORITE_GIF_REQUESTED, addFavoriteGifSaga);
}