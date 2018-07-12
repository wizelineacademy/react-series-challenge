import { takeLatest, call, put, select } from 'redux-saga/effects';
import actions from '../actions';
import sagas from '../sagas';
import selectors from '../../../selectors';
import api from '../../../services/api';

describe('Favorites container sagas', () => {
  describe('run saga', () => {
    const iterator = sagas.run();
    it('should take the latest FAVORITES_LOAD action and call loadFavorites saga', () => {
      const expected = takeLatest(
        actions.types.FAVORITES_LOAD,
        sagas.loadFavorites
      );
      expect(iterator.next().value).toEqual(expected);
    });

    it('should take the latest FAVORITE_ID_ADD action and call onFavoriteIdAdd saga', () => {
      const expected = takeLatest(
        actions.types.FAVORITE_ID_ADD,
        sagas.onFavoriteIdAdd
      );
      expect(iterator.next().value).toEqual(expected);
    });
  });

  describe('loadFavorites saga', () => {
    const iterator = sagas.loadFavorites();

    it('should put a FAVORITES_LOADING_SET action with true', () => {
      const expected = put(actions.creators.setLoadingFavorites(true));
      expect(iterator.next().value).toEqual(expected);
    });

    it('should select the favoritesIds from the state', () => {
      const expected = select(selectors.favoritesIdsSelector);
      expect(iterator.next().value).toEqual(expected);
    });

    it('should call api.gifs, with the favoritesIds selected from store', () => {
      const favoritesIds = ['id.1', 'id.2'];
      const expected = call(api.gifs, { ids: favoritesIds });
      expect(iterator.next(favoritesIds).value).toEqual(expected);
    });

    it('should put a FAVORITES_SET action with the api response as payload', () => {
      const response = {
        data: {
          data: [],
        },
      };

      const expected = put(actions.creators.setFavorites(response.data.data));
      expect(iterator.next(response).value).toEqual(expected);
    });

    it('should finally put a FAVORITES_LOADING_SET with false as payload', () => {
      const expected = put(actions.creators.setLoadingFavorites(false));
      expect(iterator.next().value).toEqual(expected);
    });
  });

  describe('onFavoriteAdd saga', () => {
    const iterator = sagas.onFavoriteIdAdd();
    it('should use the selector selectors.locationSelector to grab the path from the store', () => {
      const expected = select(selectors.locationSelector);
      expect(iterator.next().value).toEqual(expected);
    });

    it('should call the loadFavorites saga if the path selected from store was /favorites', () => {
      const expected = call(sagas.loadFavorites);
      expect(iterator.next({ path: '/favorites' }).value).toEqual(expected);
    });
  });
});
