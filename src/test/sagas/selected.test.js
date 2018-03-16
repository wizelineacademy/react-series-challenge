import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchSelectedGif, watchFetchSelectedGif } from '../../sagas/selected';
import { fetchGif } from '../../api';
import { SELECTED_GIF_REQUEST_INFO, selectedGifChange } from '../../actions/selected';

describe('selected sagas', () => {
  describe('fetchSelectedGif', () => {
    it('should make a request to fetch the selected gif and dispatch action', () => {
      const action = { payload: {} };
      const gen = fetchSelectedGif(action);

      const response = { data: [] };

      expect(gen.next().value).toEqual(call(fetchGif, action.payload));
      expect(gen.next(response).value).toEqual(put(selectedGifChange(response.data)));
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('watchFetchSelectedGif', () => {
    it(`should always take the latest ${SELECTED_GIF_REQUEST_INFO} action`, () => {
      const gen = watchFetchSelectedGif();
      expect(gen.next().value).toEqual(takeLatest(SELECTED_GIF_REQUEST_INFO, fetchSelectedGif));
      expect(gen.next().done).toBeTruthy();
    });
  });
});
