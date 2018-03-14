import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import rootSaga from '../../sagas';
import { gif, search, favorites, trending } from '../../reducers';
import { trendingActions, searchActions, gifActions, favoritesActions } from '../';
import config from '../../app.config';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [sagaMiddleware];
const reducer = combineReducers({ gif, search, favorites, trending });
const { url } = config.api;

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const mockAxios = new MockAdapter(axios);

describe('trending actions', () => {
  const error = { code: -1, title: 'bad things happened' };
  let store;

  beforeEach(() => {
    store = createStore(reducer, initialState, composedEnhancers);
    sagaMiddleware.run(rootSaga);
  });

  afterEach(() => { mockAxios.reset(); });

  describe('loadingTrending', () => {
    it('should ', () => {
      mockAxios.onGet(`${url}/trending`).replyOnce(200, { data: {} });
      store.dispatch(trendingActions.creators.loadingTrending());
      expect(store.getState().trending.loading).toBe(true);
      expect(store.getState().trending.data).toBeUndefined();
    });

    it('should dispatch and return error on failure', () => {
      mockAxios.onGet(`${url}/trending`).replyOnce(500, error);
      store.dispatch(trendingActions.creators.loadingTrending());
    });
  });

  describe('requestGIF', () => {
    const gifId = 'testId';

    it('should ', () => {
      mockAxios.onGet(`${url}/${gifId}`).replyOnce(200, { data: {} });
      store.dispatch(gifActions.creators.requestGIF(gifId));
      expect(store.getState().gif.loading).toBe(true);
      expect(store.getState().gif.data).toBeUndefined();
    });

    it('should dispatch and return error on failure', () => {
      mockAxios.onGet(`${url}/${gifId}`).replyOnce(500, error);
      store.dispatch(gifActions.creators.requestGIF(gifId));
    });
  });

  describe('requestSearch', () => {
    it('should ', () => {
      mockAxios.onGet(`${url}/search`).replyOnce(200, { data: {} });
      store.dispatch(searchActions.creators.requestSearch('wizeline'));
    });

    it('should dispatch and return error on failure', () => {
      mockAxios.onGet(`${url}/search`).replyOnce(500, error);
      store.dispatch(searchActions.creators.requestSearch('wizeline'));
    });
  });

  describe('requestToggle', () => {
    it('should toggle favorites ', () => {
      store.dispatch(favoritesActions.creators.requestToggle('test'));
      store.dispatch(favoritesActions.creators.requestToggle('test'));
    });
  });

  describe('fetchFavorites', () => {
    it('should toggle favorites ', () => {
      store.dispatch(favoritesActions.creators.fetchFavorites());
    });
  });
});
