import store from '../index';

describe('LocalStorage', () => {
    test('should return saved store', () => {
      expect(store).toBeTruthy()
    })
});