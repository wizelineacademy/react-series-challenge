import {FETCH_TRENDING_GIFS, fetchTrendingGifsFail, fetchTrendingGifsOk} from "../actions/trending";
import {call, put, takeEvery} from "redux-saga/effects";
import get from './giphyAPI';

const simplifyGIFObject = (gif) => ({
  id: gif.id,
  images: {
    original: gif.images.downsized_large.url,
    small: gif.images.fixed_width_downsampled.url
  }
});

function * onFetchTrendingGifs () {
  let response;
  try {
    response = yield call(get, 'trending?limit=80');
  } catch (error) {
    yield put(fetchTrendingGifsFail());
  }
  const trendingGifs = response.map(simplifyGIFObject);
  yield put(fetchTrendingGifsOk(trendingGifs));
}

const trendingWatchers = [
  takeEvery(FETCH_TRENDING_GIFS, onFetchTrendingGifs)
];

export default trendingWatchers;
