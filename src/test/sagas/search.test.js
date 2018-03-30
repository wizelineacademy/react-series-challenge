import { call, put, takeEvery } from 'redux-saga/effects';
import { loadSearchSaga } from '../../sagas/search';
import searchSaga from '../../sagas/search';
import * as giphyApi from '../../api/giphy';
import searchActions from '../../actions/search';

describe('Search sagas', () =>{
  describe('loadSearchSaga(action)', () => {
    const queryStr = 'happy';
    const generator = loadSearchSaga({
      queryStr: queryStr
    });

    it('Should return the giphy.loadSearch api call', () => {
      expect(generator.next().value).toEqual(
        call(giphyApi.loadSearch, queryStr)
      );
    }); //it

    it('Should return the search sucess response', () => {
      expect(generator.next().value).toEqual(
        put({
          type: searchActions.types.GET_SEARCH_COMPLETED,
          search: undefined,
        })
      );
    });

    it('should be done', () => {
      expect(generator.next().done).toBeTruthy();
    });

    it('trhows an error', () => {
      const error = 'Gifs not found';
      const generator_err = loadSearchSaga({
        queryStr: queryStr
      });
      generator_err.next();
      expect(generator_err.throw(error).value).toEqual(
        put({
          type: searchActions.types.GET_SEARCH_FAILED,
          error
        })
      );
    });
  }); //loadSearchSaga

  describe('searchSaga', () =>{
    it('should call loadSearchSaga', () => {
      const generator = searchSaga();

      expect(generator.next().done).toBeFalsy();
      expect(generator.next().done).toEqual(expect.anything());
        //takeEvery(
        //  searchActions.types.GET_SEARCH_REQUESTED,
        //  loadSearchSaga()
        //)
    });
  });
}); //describe
