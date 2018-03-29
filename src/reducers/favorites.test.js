import * as favorites from './favorites';
import * as favoritesActions from '../actions/favorites';
let creators = favoritesActions.default.creators;
let favoritesReducer = favorites.default;
let data = {a: 1, b: 2, gifs:{}}

let gif = {id: 55};

const initialState = {
    gifs: {},
    filter: ''
  };
describe('Favorite Reducer', () => {
    it('No action', ()=>{
      expect(favoritesReducer(data, {type: 'no-action'})).toEqual(data);
    });
    it ("initial state", ()=>{
      expect(favoritesReducer(undefined, {type: 'no-action'})).toEqual(initialState);  
    })
    
    it('Filter Favorite List', ()=>{
      var result = {
          ...data,
          filter: 'anime'
      }
      expect(favoritesReducer(data, creators.filterFavorite('anime'))).toEqual(result);
    });
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