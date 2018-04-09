import './helpers/localStorageMock';
import {addFavoriteGif, getFavoriteGifs, removeFavoriteGif} from '../storage/favoriteGifs';

afterEach(() => {
  localStorage.removeItem('favoriteGifs');
});

afterAll(() => {
  localStorage.clear();
});

test('add favoriteGifs Storage ...', (done) => {
  
  const id = '123456789';
  const title = 'mi prueba';

  addFavoriteGif({id, title})
    .then((gif) => {
      expect(gif.id).toEqual(id);
      expect(gif.title).toEqual(title);
      done();
    });
});

test('loaded empty data from storage', (done) => {
  getFavoriteGifs({offset:1, count: 100})
    .then((response) => {
      expect(response.data.length).toEqual(0);
      done();
    });
});

test('loaded data from storage', (done) => {
  const id = '123456789';
  const title = 'mi prueba';

  addFavoriteGif({id, title})
    .then((gif) => {

      getFavoriteGifs({offset:1, count: 100, q: 'prueba'})
        .then((response) => {
          gif = response.data.find(a => a.id === id);
          
          expect(gif.id).toEqual(id);
          expect(gif.title).toEqual(title);
          done();
        });
    });
});

test('remove data from storage', (done) => {
  const id = '123456789';
  const title = 'mi prueba';

  addFavoriteGif({id, title})
    .then((gif) => {
      removeFavoriteGif(id)
        .then((idDeeleted) => {
          expect(id).toEqual(idDeeleted);
          done();
        })
    });
});
