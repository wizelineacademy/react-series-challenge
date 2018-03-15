import { takeLatest, call, put, select, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  SEARCH_GIFS_CHANGE_QUERY,
  searchGifsRequest,
  searchGifsSuccess
} from '../../actions/search';
import { searchGifs } from '../../api';
import { getQuery } from '../../selectors/search';
import { searchGifsSaga, watchSearchGifsSaga, SEARCH_DEBOUNCE_MS } from '../../sagas/search';
import history from '../../history';

jest.mock('../../history', () => jest.fn());

describe('search sagas', () => {
  describe('searchGifsSaga', () => {
    it('should cancel the search if pathname includes `favorites`', () => {
      Object.defineProperty(history, 'location', {
        get: () => ({ pathname: '/favorites' }),
        configurable: true
      });

      const gen = searchGifsSaga();

      expect(gen.next().value).toEqual(cancel());
    });

    it('should cancel the search if if the query length is 0', () => {
      Object.defineProperty(history, 'location', {
        get: () => ({ pathname: '/' }),
        configurable: true
      });
      const fn = () => true;
      Object.defineProperty(history, 'push', {
        get: jest.fn(() => fn),
        configurable: true
      });

      const query = '';

      const gen = searchGifsSaga();

      expect(gen.next().value).toEqual(call(delay, SEARCH_DEBOUNCE_MS));
      expect(gen.next().value).toEqual(select(getQuery));
      expect(gen.next(query).value).toEqual(call(history.push, `/`));
    });

    it('should do search request if query is valid and dispatch an action', () => {
      Object.defineProperty(history, 'location', {
        get: () => ({ pathname: '/' }),
        configurable: true
      });
      const fn = () => true;
      Object.defineProperty(history, 'push', {
        get: jest.fn(() => fn),
        configurable: true
      });

      const query = 'foo';
      const response = { data: [] };

      const gen = searchGifsSaga();

      expect(gen.next().value).toEqual(call(delay, SEARCH_DEBOUNCE_MS));
      expect(gen.next().value).toEqual(select(getQuery));
      expect(gen.next(query).value).toEqual(put(searchGifsRequest()));
      expect(gen.next().value).toEqual(call(searchGifs, query));
      expect(gen.next(response).value).toEqual(put(searchGifsSuccess(response)));
      expect(gen.next().value).toEqual(call(history.push, `/search/${query}`));
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('watchSearchGifsSaga', () => {
    it(`should always take the latest ${SEARCH_GIFS_CHANGE_QUERY} action`, () => {
      const gen = watchSearchGifsSaga();
      expect(gen.next().value).toEqual(takeLatest(SEARCH_GIFS_CHANGE_QUERY, searchGifsSaga));
      expect(gen.next().done).toBeTruthy();
    });
  });
});
