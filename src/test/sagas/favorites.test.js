import { takeLatest, call, select } from 'redux-saga/effects';
import { storeFavoriteSaga, watchStoreFavoriteSaga, saveFavorites } from '../../sagas/favorites';
import { TOGGLE_FAVORITE } from '../../actions/favorites';
import { getFavorites } from '../../selectors/favorites';

describe('favorites sagas', () => {
  describe('storeFavoriteSaga', () => {
    it('should store favorites gif from store into localStorage', () => {
      const gen = storeFavoriteSaga();

      const favorites = [{ id: 1 }, { id: 2 }];

      expect(gen.next().value).toEqual(select(getFavorites));
      expect(gen.next(favorites).value).toEqual(call(saveFavorites, favorites));
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('watchStoreFavoriteSaga', () => {
    it(`should always take the latest ${TOGGLE_FAVORITE} action`, () => {
      const gen = watchStoreFavoriteSaga();
      expect(gen.next().value).toEqual(takeLatest(TOGGLE_FAVORITE, storeFavoriteSaga));
      expect(gen.next().done).toBeTruthy();
    });
  });
});
