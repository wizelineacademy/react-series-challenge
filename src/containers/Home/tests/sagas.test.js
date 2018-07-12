import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import sagas from '../sagas';
import actions from '../actions';

describe('Home containers sagas', () => {
  describe('run saga', () => {
    const iterator = sagas.run();
    it('should take the latest TRENDING_GIFS_LOAD', () => {
      const expected = takeLatest(
        actions.types.TRENDING_GIFS_LOAD,
        sagas.loadTrendingGifs
      );
      expect(iterator.next().value).toEqual(expected);
    });

    it('should take the latest GIFS_SEARCH', () => {
      const expected = takeLatest(actions.types.GIFS_SEARCH, sagas.searchGifs);
      expect(iterator.next().value).toEqual(expected);
    });
  });

  describe('loadTrendingGifs saga', () => {
    const iterator = sagas.loadTrendingGifs();
    it('should put a LOADING_SET action with true as payload', () => {
      const expected = put(actions.creators.setLoading(true));
      expect(iterator.next().value).toEqual(expected);
    });

    it('should call api.trending', () => {
      const expected = call(api.trending);
      expect(iterator.next().value).toEqual(expected);
    });

    it('should put a GIFS_SET action with the data from the previous call as payload', () => {
      const response = {
        data: {
          data: [],
        },
      };
      const expected = put(actions.creators.setGifs(response.data.data));
      expect(iterator.next(response).value).toEqual(expected);
    });

    it('should put a LOADING_SET action with false as payload', () => {
      const expected = put(actions.creators.setLoading(false));
      expect(iterator.next().value).toEqual(expected);
    });
  });

  describe('searchGifs saga', () => {
    describe('search with a search term received', () => {
      const term = 'dogo';
      const iterator = sagas.searchGifs({ payload: term });
      it('should put a LOADING_SET action with true as payload', () => {
        const expected = put(actions.creators.setLoading(true));
        expect(iterator.next().value).toEqual(expected);
      });

      it('should put a SEARCH_TERM_SET action with the search term as payload ', () => {
        const expected = put(actions.creators.setSearchTerm(term));
        expect(iterator.next().value).toEqual(expected);
      });

      it('should call api.search with the search term as param if the searchTerm is defined', () => {
        const expected = call(api.search, term);
        expect(iterator.next().value).toEqual(expected);
      });

      it('should put a GIFS_SET action with the api response as payload', () => {
        const response = {
          data: {
            data: [],
          },
        };
        const expected = put(actions.creators.setGifs(response.data.data));
        expect(iterator.next(response).value).toEqual(expected);
      });

      it('should put a LOADING_SET action with false as payload', () => {
        const expected = put(actions.creators.setLoading(false));
        expect(iterator.next().value).toEqual(expected);
      });
    });

    describe('search without a search term received', () => {
      const term = '';
      const iterator = sagas.searchGifs({ payload: term });
      it('should put a LOADING_SET action with true as payload', () => {
        const expected = put(actions.creators.setLoading(true));
        expect(iterator.next().value).toEqual(expected);
      });

      it('should put a SEARCH_TERM_SET action with the search term as payload ', () => {
        const expected = put(actions.creators.setSearchTerm(term));
        expect(iterator.next().value).toEqual(expected);
      });

      it('should put a LOADING_SET action with false as payload', () => {
        const expected = put(actions.creators.setLoading(false));
        expect(iterator.next().value).toEqual(expected);
      });
    });
  });
});
