import initializeStore from '../config/store';

describe('store', () => {

  it('Should test that the store object is not null', () => {
    const storeObject = initializeStore(null);
    expect(storeObject).not.toBeNull();
  });
});
