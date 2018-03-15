import { 
  toggleFavoriteSaga,
  loadFavoriteSaga,
  updateIsFavSagas
} from '../../src/sagas/favoritesSagas';
import { put , select } from 'redux-saga/effects';
import favActions from '../../src/actions/favorites';
import detailsActions from '../../src/actions/details'
import trendingActions from '../../src/actions/trending'
import searchActions from '../../src/actions/search'

import { 
  getFavoritesState, 
  getTrendingState,
  getSearchState,
  getDetailsState
} from '../../src/selectors'


describe('Favorite Sagas Tests', () => {

  test('Favorite Saga Load ', () => {
    localStorage.setItem('cc_giphy_favorites',JSON.stringify({ test : 'ok ' }));
    let sagaIterator = loadFavoriteSaga(favActions.creators.loadFavorites());
    expect(sagaIterator.next().value).toEqual( {"test": "ok "})
    expect(sagaIterator.next( {"test": "ok "}).value).toEqual(put(favActions.creators.updateFavorites({"test": "ok "})))

  });


  test('Favorite Toggle add  ', () => {
    const FavState = {
      searchTerm: '',
      filtered: {},
      favorites: {}
    }
    const giphySelected = {
      isFav: false,
      id:"3oEduXtXta9onVDlIc",
      images: {
        preview_gif: 'myPreview',
        downsized_large: 'MyLargeImage'
      },
      title :"sad dog GIF by The BarkPost "
    }
    let sagaIterator = toggleFavoriteSaga(favActions.creators.toggleFavoritesReq(giphySelected) );
    expect(sagaIterator.next().value).toEqual(select( getFavoritesState ))
    sagaIterator.next(FavState)
    expect(sagaIterator.next().value).toEqual(put(favActions.creators.updateFavorites(
      { '3oEduXtXta9onVDlIc': { ...giphySelected, isFav: true } }
    )))

    expect(sagaIterator.next().value).toEqual(put(favActions.creators.updateIsFav()));
  });


  test('Favorite Toggle Remove  ', () => {

    const giphySelected = {
      isFav: true,
      id:"3oEduXtXta9onVDlIc",
      images: {
        preview_gif: 'myPreview',
        downsized_large: 'MyLargeImage'
      },
      title :"sad dog GIF by The BarkPost "
    }
    const FavState = {
      searchTerm: '',
      filtered: {},
      favorites: {'3oEduXtXta9onVDlIc': { ...giphySelected, isFav: true }}
    }
    let sagaIterator = toggleFavoriteSaga(favActions.creators.toggleFavoritesReq(giphySelected) );
    expect(sagaIterator.next().value).toEqual(select( getFavoritesState ))
    sagaIterator.next(FavState)
    expect(sagaIterator.next().value).toEqual(put(favActions.creators.updateFavorites({}
    )))

    expect(sagaIterator.next().value).toEqual(put(favActions.creators.updateIsFav()));
  });


  test('Favorite updateIsFavSagas   ', () => {

    const giphySelected = {
      isFav: false,
      id:"3oEduXtXta9onVDlIc",
      images: {
        preview_gif: 'myPreview',
        downsized_large: 'MyLargeImage'
      },
      title :"sad dog GIF by The BarkPost "
    }

    const FavState = {
      searchTerm: '',
      filtered: {},
      favorites: {'3oEduXtXta9onVDlIc': { ...giphySelected, isFav: true }}
    }
    const SearchState = {
      currentTerm:'',
      isLoading: true,
      giphyArray:[ { ...giphySelected }],
      errorMessage: ''
    }
    const trendingState = {
      currentTerm:'',
      isLoading: true,
      giphyArray:[ { ...giphySelected }],
      errorMessage: ''
    }
    const DetailState = {
      isLoading: false,
      giphy: { ...giphySelected },
      errorMessage: ''
    }

    let sagaIterator = updateIsFavSagas(favActions.creators.toggleFavoritesReq(giphySelected) );
    expect(sagaIterator.next().value).toEqual(select(getFavoritesState));
    expect(sagaIterator.next(FavState).value).toEqual(select(getTrendingState));
    expect(sagaIterator.next(trendingState).value).toEqual(select(getSearchState));
    expect(sagaIterator.next(SearchState).value).toEqual(select(getDetailsState));
    expect(sagaIterator.next(DetailState).value).toEqual(put(detailsActions.creators.fetchDetailsSuccess({...giphySelected, isFav: true } )));

    expect(sagaIterator.next().value).toEqual(put(trendingActions.creators.trendingSuccess([{...giphySelected, isFav: true }] )))
    expect(sagaIterator.next().value).toEqual(put(searchActions.creators.searchSuccess([{...giphySelected, isFav: true }] )))


  });

});