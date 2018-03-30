import { all } from 'redux-saga/effects';
import { greetingsSaga } from '../../sagas/index';
import rootSaga from '../../sagas/index';
import searchSaga from '../../sagas/search';
import trendingSaga from '../../sagas/trending';

describe('index Saga', () => {
  global.console = {
    log:jest.fn()
  }

  describe('greetingsSaga', () => {
    it('should call the saga', () => {
      expect(greetingsSaga()).toBeDefined();
    });
  });

  describe('rootSaga', () =>{
    it('should call all the sagas', () => {
      const generator = rootSaga();
      expect(generator.next().value).toEqual(
        all([
          greetingsSaga(),
          trendingSaga(),
          searchSaga(),
        ])
      );
    });
  });
})
