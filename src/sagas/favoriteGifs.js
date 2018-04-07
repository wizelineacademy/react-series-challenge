import { 
  call,
  takeEvery,
  put,
  select
} from 'redux-saga/effects';
import favoriteGifs from '../actions/favoriteGifs';
import trendingGifs from '../actions/trendingGifs';
import { getFavoriteGifs, addFavoriteGif, removeFavoriteGif } from '../storage/favoriteGifs';

const { types } = favoriteGifs;

const selectData2Send = (state) => {
  return {offset: state.favoriteGifs.pagination.offset, q: state.favoriteGifs.query};
};

const selectGif2Save = (state) => {
  return state.favoriteGifs.selected2Add;
};

const selectGifID2Remove = (state) => {
  return state.favoriteGifs.selectedID2remove;
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

export function* removeFavoriteGifSaga() {
  const { creators } = favoriteGifs;
  const { creators: trendingCreators } = trendingGifs;

  try {
    const gifID2Remove = yield select(selectGifID2Remove);
    let favoriteGifIDResponse = null;
    
    favoriteGifIDResponse = yield call(removeFavoriteGif, gifID2Remove);
    yield put(creators.removeFavoriteGifCompleted(favoriteGifIDResponse));
    yield put(trendingCreators.removed2Favorites(favoriteGifIDResponse))
  } catch (error) {
    console.log('removeFavoriteGifSaga catch -> error', error);
    yield put(creators.removeFavoriteGifFailed(error.message));
  }
}

export default function* favoriteGifsSaga() {
  yield takeEvery(types.GET_FAVORITE_GIFS_REQUESTED, loadFavoriteGifsSaga);
  yield takeEvery(types.ADD_FAVORITE_GIF_REQUESTED, addFavoriteGifSaga);
  yield takeEvery(types.REMOVE_FAVORITE_GIF_REQUESTED, removeFavoriteGifSaga);
}