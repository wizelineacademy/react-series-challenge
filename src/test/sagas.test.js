import { fork } from 'redux-saga/effects';
import sagas from '../sagas';
import homeSagas from '../containers/Home/sagas';
import favoritesSagas from '../containers/Favorites/sagas';

describe('Root saga', () => {
  describe('run', () => {
    const rootIterator = sagas.run();

    it('should fork home sagas run', () => {
      const next = rootIterator.next().value;
      const expected = fork(homeSagas.run);
      expect(next).toEqual(expected);
    });

    it('should fork favorites sagas run', () => {
      const next = rootIterator.next().value;
      const expected = fork(favoritesSagas.run);
      expect(next).toEqual(expected);
    });
  });
});
