import { call, takeEvery, put, select } from 'redux-saga/effects';
import search from '../actions/search';
import { getSearch, getGif} from '../services/api'


export function* loadSearchGifs(action) {
  try {
    const searchResponse = yield call(getSearch, action.payload);
    yield put(search.creators.requestSearchGifsSuccess(searchResponse.data));
  } catch (error) {
    yield put(search.creators.requestSearchGifsFail(error));
    console.log(error);
  }
}

export function* loadSearchFavorites(action) {
  try {
    const selector = yield select()
    const favs = selector.favoriteGifs
    const regex = RegExp(`.*(${action.payload})+.*`,'gi')
    const response = favs.filter(fav => regex.test(fav.title))
    yield put(search.creators.searchFavsSuccess(response))
  } catch (error) {
    console.log(error);
  }
}

export function* loadSearchGif(action) {
  try {
    const searchResponse = yield call(getGif, action.payload);
    yield put(search.creators.searchGifSuccess(searchResponse.data))
  } catch (error) {
    console.log(error);
  }
}

export default function* searchSaga() {
  yield takeEvery(search.types.REQUEST_SEARCH_GIFS, loadSearchGifs)
  yield takeEvery(search.types.SEARCH_FAVS, loadSearchFavorites)
  yield takeEvery(search.types.SEARCH_GIF, loadSearchGif )
}
