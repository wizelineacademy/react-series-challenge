import { loadFavorites } from '../../../redux/store/localStorage';

beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();
    // or directly reset the storage
    
});

describe('post reducer', () => {
  it('should loadStorage', () => {
    // it's empty on purpose because it's just starting to fetch posts
    expect(loadFavorites().toEqual({}));
  });
});