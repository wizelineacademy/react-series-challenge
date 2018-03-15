
import { all, takeLatest, put, select } from 'redux-saga/effects';
import favoritesActions from '../actions/favorites';
import trendingActions from '../actions/trending';
import searchActions from '../actions/search';
import detailsActions from '../actions/details';
import favApi from '../apis/favories';
import { 
  getFavoritesState, 
  getTrendingState,
  getSearchState,
  getDetailsState
} from '../selectors/index'


export function* toggleFavoriteSaga (action) {
  const { payload } = action;
  const gif = payload;
  const state = yield select(getFavoritesState);
  let newState = {...state};
  if (newState.favorites[gif.id]) {
    delete newState.favorites[gif.id]
  } else {
    newState.favorites[gif.id] = { ...gif };
    newState.favorites[gif.id].isFav = true;
  }
  yield favApi.save(newState.favorites);
  yield put (favoritesActions.creators.updateFavorites(newState.favorites));
  yield put (favoritesActions.creators.updateIsFav());
}

export function* loadFavoriteSaga (action) {
  const favorites = yield favApi.load();
  yield put (favoritesActions.creators.updateFavorites(favorites));
}

export function* updateIsFavSagas (action) {
  const favState = yield select(getFavoritesState);
  //Update Trending State based on what we have in localstorage as Favorites
  const trendingState = yield select(getTrendingState);
  let newTrendState = { ...trendingState }
  newTrendState.giphyArray.forEach (( giphy, index ) =>{
    newTrendState.giphyArray[index].isFav = false;
    if(giphy.id in favState.favorites ){
      newTrendState.giphyArray[index].isFav = true;
    }
  })
  //Update Search State based on what we have in localstorage as Favorites
  const searchState = yield select(getSearchState);
  let newSearchState = { ...searchState }
  newSearchState.giphyArray.forEach (( giphy, index ) =>{
    newSearchState.giphyArray[index].isFav = false;
    if(giphy.id in favState.favorites ){
      newSearchState.giphyArray[index].isFav = true;
    }
  })

  //Update Details State based on what we have in localstorage as Favorites
  const detailState = yield select(getDetailsState);
  let newDetailState = { ...detailState }
  if(newDetailState.giphy.id){
    newDetailState.giphy.isFav = false
    if(newDetailState.giphy.id in favState.favorites ){
      newDetailState.giphy.isFav = true;
    }
    yield put (detailsActions.creators.fetchDetailsSuccess(newDetailState.giphy));
  }

  yield put (trendingActions.creators.trendingSuccess(newTrendState.giphyArray));
  yield put (searchActions.creators.searchSuccess(newSearchState.giphyArray));
}

export default function* rootSaga () {
  yield all([
    //add your sagas here:
    yield takeLatest(favoritesActions.types.FAVORITES_TOGGLE_REQ ,toggleFavoriteSaga),
    yield takeLatest(favoritesActions.types.FAVORITES_LOAD ,loadFavoriteSaga),
    yield takeLatest(favoritesActions.types.IS_FAV_UPDATE ,updateIsFavSagas),
  ]);
}
