import * as favorites from './favorites';
import * as favoritesActions from '../actions/favorites';
let creators = favoritesActions.default.creators;
let favoritesReducer = favorites.default;
let data = {a: 1, b: 2, gifs:{}}
let types = favorites.default.types;
let gif = {id: 55};
let q = 'anime';
let error = {message: 'invalid api key'}
const initialState = {
    gifs: {},
  };
describe('Favorite Reducer', () => {
    it('No action', ()=>{
      expect(favoritesReducer(data, {type: 'no-action'})).toEqual(data);
    });
    it ("initial state", ()=>{
      expect(favoritesReducer(undefined, {type: 'no-action'})).toEqual(initialState);  
    })
    
    it('Adding Favorite', ()=>{
      var result = {
          ...data,
          gifs: {}
      }
      result.gifs[55] = gif;
      expect(favoritesReducer(data, creators.toggleFavorite(gif))).toEqual(result);
    });
    it('Removing Favorite', ()=>{
        var result = {
            ...data,
            gifs: {}
        }
        var store = {...data};
        store.gifs[55] = gif;
        expect(favoritesReducer(data, creators.toggleFavorite(gif))).toEqual(result);
      });
  });