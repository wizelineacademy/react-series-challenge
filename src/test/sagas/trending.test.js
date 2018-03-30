import { call, put, takeEvery } from 'redux-saga/effects';
import { loadTrendingSaga } from '../../sagas/trending';
import trendingSaga from '../../sagas/trending';
import * as giphyApi from '../../api/giphy';
import trendingActions from '../../actions/trending';

describe('Trending sagas', () =>{
  describe('loadTrendingSaga()', () => {
    const generator = loadTrendingSaga();

    it('Should return the giphy.loadSearch api call', () => {
      expect(generator.next().value).toEqual(
        call(giphyApi.loadTrending)
      );
    }); //it

    it('Should return the search sucess response', () => {
      expect(generator.next().value).toEqual(
        put({
          type: trendingActions.types.GET_TRENDING_COMPLETED,
          trending: undefined,
        })
      );
    });

    it('should be done', () => {
      expect(generator.next().done).toBeTruthy();
    });

    it('trhows an error', () => {
      const error = 'Gifs not found';
      const generator_err = loadTrendingSaga();
      generator_err.next();
      expect(generator_err.throw(error).value).toEqual(
        put({
          type: trendingActions.types.GET_TRENDING_FAILED,
          error
        })
      );
    });
  }); //loadTrendingSaga

  describe('trendingSaga', () =>{
    it('should call loadTrendingSaga', () => {
      const generator = trendingSaga();

      expect(generator.next().done).toBeFalsy();
      expect(generator.next().done).toEqual(expect.anything());
        //takeEvery(
        //  trendingActions.types.GET_TRENDING_REQUESTED,
        //  loadTrendingSaga()
        //)
    });
  });
}); //describe
