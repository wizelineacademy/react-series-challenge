import  {getFavoritesList, addFavorite, removeFavorite, filterFavorites} from '../sagas/favorites';
import Utils from '../utils/Utils';

class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = value.toString();
    }
  
    removeItem(key) {
      delete this.store[key];
    }
  };
  
  global.localStorage = new LocalStorageMock;
  global.Utils = Utils;
  localStorage.setItem('favList','[{"id":"testId","data": "Test data"}]');
describe('sagas Favorites', () => {
    it('getFavoritesList', () => {
        const gen = getFavoritesList();
       gen.next();
       gen.next();
       expect(gen.next().done).toEqual(true);
    });
    it('addFavorite', () => {
        const gen = addFavorite({payload: 'test'});
       gen.next();
       gen.next();
       expect(gen.next().done).toEqual(true);
    });
    it('removeFavorite', () => {
        const gen = removeFavorite({payload: 'test'});
       gen.next();
       gen.next();
       expect(gen.next().done).toEqual(true);
    });
    it('filterFavorites', () => {
        const gen = filterFavorites({payload:'test'});
       gen.next(select(state.favorites.list.data));
       gen.next();
       expect(gen.next().done).toEqual(true);
    });
});