import configureMockStore from 'redux-mock-store';

import {
  BEGIN_GET_GIFS_TRENDING_GIFS,
  SUCCESS_GET_GIFS_TRENDING_GIFS,
  ERROR_GET_GIFS_TRENDING_GIFS,
  BEGIN_SEARCH_GIF_API,
  SUCCESS_SEARCH_GIF_API,
  ERROR_SEARCH_GIF_API,
  HANDLE_FAVORITE_CHANGE,
  SET_NEW_STATUS_FAVORITES
} from '../../redux/types';

import {
  fetchTrendingGifs,
  fetchTrendingGifsCompleted,
  fetchTrendingGifsFailed,
  searchGIFAPI,
  searchGIFAPICompleted,
  searchGIFAPIFailed,
  handleFavoriteChange,
  setNewFavoriteStatus
} from '../../redux/actions';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

// Initial State
let initialState = {
  gifs: [],
  searchAPI: '',
  favoriteGifs: [],
  filter: { limit: 25, offset: 0, fmt: 'json' }
};

describe('actions/app', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('dispatches fetchTrendingGifs action with the filter when action called', () => {
    let store = mockStore({});

    // Dispatch the action
    store.dispatch(fetchTrendingGifs(initialState.filter));

    // Test if the store dispatched the expected actions
    let actions = store.getActions();
    let expectedPayload = { type: 'BEGIN_GET_GIFS_TRENDING_GIFS', filter: initialState.filter };
    expect(actions).toEqual([expectedPayload]);
  });

  it('dispatches fetchTrendingGifsCompleted action with an array of gifs when action called', () => {
    let newGifs = [{ id: 1 }, { id: 2 }];

    let store = mockStore({});

    // Dispatch the action
    store.dispatch(fetchTrendingGifsCompleted(newGifs));

    // Test if the store dispatched the expected actions
    let actions = store.getActions();
    let expectedPayload = { type: 'SUCCESS_GET_GIFS_TRENDING_GIFS', gifs: newGifs };
    expect(actions).toEqual([expectedPayload]);
  });

  it('dispatches fetchTrendingGifsFailed action when something goes wrong', () => {
    let error = { message: 'Something went wrong' };
    let store = mockStore({});

    // Dispatch the action
    store.dispatch(fetchTrendingGifsFailed(error));

    // Test if the store dispatched the expected actions
    let actions = store.getActions();
    let expectedPayload = { type: 'ERROR_GET_GIFS_TRENDING_GIFS', error: error };
    expect(actions).toEqual([expectedPayload]);
  });

  it('dispatches searchGIFAPI action when the action is called', () => {
    let search = 'new gif';
    let store = mockStore({});

    // Dispatch the action
    store.dispatch(searchGIFAPI(search));

    // Test if the store dispatched the expected actions
    let actions = store.getActions();
    let expectedPayload = { type: 'BEGIN_SEARCH_GIF_API', search: search };
    expect(actions).toEqual([expectedPayload]);
  });

  it('dispatches searchGIFAPICompleted action when the action is called', () => {
    let newGifs = [{ id: 1 }, { id: 2 }];
    let store = mockStore({});

    // Dispatch the action
    store.dispatch(searchGIFAPICompleted(newGifs));

    // Test if the store dispatched the expected actions
    let actions = store.getActions();
    let expectedPayload = { type: 'SUCCESS_SEARCH_GIF_API', gifs: newGifs };
    expect(actions).toEqual([expectedPayload]);
  });

  it('dispatches searchGIFAPIFailed action when something goes wrong', () => {
    let error = { message: 'Something went wrong' };
    let store = mockStore({});

    // Dispatch the action
    store.dispatch(searchGIFAPIFailed(error));

    // Test if the store dispatched the expected actions
    let actions = store.getActions();
    let expectedPayload = { type: 'ERROR_SEARCH_GIF_API', error: error };
    expect(actions).toEqual([expectedPayload]);
  });

  it('dispatches handleFavoriteChange action when the action is called', () => {
    let id = 'aasdklmsd';
    let store = mockStore({});

    // Dispatch the action
    store.dispatch(handleFavoriteChange(id));

    // Test if the store dispatched the expected actions
    let actions = store.getActions();
    let expectedPayload = { type: 'HANDLE_FAVORITE_CHANGE', id: id };
    expect(actions).toEqual([expectedPayload]);
  });

  it('dispatches setNewFavoriteStatus action when the action is called', () => {
    let favorites = ['aasdklmsd', 'asdasdasd'];
    let store = mockStore({});

    // Dispatch the action
    store.dispatch(setNewFavoriteStatus(favorites));

    // Test if the store dispatched the expected actions
    let actions = store.getActions();
    let expectedPayload = { type: 'SET_NEW_STATUS_FAVORITES', favorites: favorites };
    expect(actions).toEqual([expectedPayload]);
  });
});
