import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchTrendingSaga, watchFetchTrendingSaga } from '../../sagas/trending';
import { fetchTrending } from '../../api';
import { LOAD_TRENDING_REQUEST, loadTrendingSuccess } from '../../actions/trending';

describe('trending sagas', () => {
  describe('fetchTrendingSaga', () => {
    it('should make a request to get gifs and put an action with it', () => {
      const gen = fetchTrendingSaga();

      const response = { data: [] };

      expect(gen.next().value).toEqual(call(fetchTrending));
      expect(gen.next(response).value).toEqual(put(loadTrendingSuccess(response)));
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('watchFetchTrendingSaga', () => {
    it(`should always take the latest ${LOAD_TRENDING_REQUEST} action`, () => {
      const gen = watchFetchTrendingSaga();
      expect(gen.next().value).toEqual(takeLatest(LOAD_TRENDING_REQUEST, fetchTrendingSaga));
      expect(gen.next().done).toBeTruthy();
    });
  })
});
