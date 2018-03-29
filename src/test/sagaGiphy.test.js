import  {getTopTrending, toSearchGifs, getGifById} from '../sagas/giphy';

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
  
  global.localStorage = new LocalStorageMock();
  global.state = {
      favorites:{
        list: {data: []
        }
      }
    }

  localStorage.setItem('favList','[{"id":"testId","data": "Test data"}]');

describe('sagas giphy', () => {
    it('giphy getTopTrending', async () => {
        const gen = getTopTrending();
       gen.next();
       gen.next();
       expect(gen.next().done).toEqual(true);
    });
    it('giphy toSearchGifs', () => {
        const gen = toSearchGifs('red');
       gen.next();
       gen.next();
       expect(gen.next().done).toEqual(true);
    });
    it('giphy getGifById', () => {
        const gen = getGifById('test');
       gen.next();
       gen.next();
       expect(gen.next().done).toEqual(true);
    });
});