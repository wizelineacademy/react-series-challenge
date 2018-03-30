import searchSaga from '../sagas/searchSaga';

describe('searchSaga', () => {

  it('Should check searchSaga fetch request', () => {
    const searchSagaIterator = searchSaga();
    expect(searchSagaIterator.next().value).not.toBeNull();
  });

  it('Should check searchSaga api request', () => {
    const searchSagaIterator = searchSaga();
    searchSagaIterator.next();
    expect(searchSagaIterator.next().value).not.toBeNull();
  });

  it('Should check searchSaga failure request', () => {
    const searchSagaIterator = searchSaga();
    searchSagaIterator.next();
    searchSagaIterator.next();
    expect(searchSagaIterator.next().value).not.toBeNull();
  });
})
