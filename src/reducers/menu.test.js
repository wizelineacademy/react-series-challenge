import * as menu from './menu';
import * as menuActions from '../actions/menu';
let creators = menuActions.default.creators;
let menuReducer = menu.default;
let data = {show: true}
let types = menu.default.types;
let gif = {id: 55};
let q = 'anime';
let error = {message: 'invalid api key'}
const initialState = {
    show: false
  };
describe('Menu Reducer', () => {
    it('No action', ()=>{
      expect(menuReducer(data, {type: 'no-action'})).toEqual(data);
    });
    it ("initial state", ()=>{
      expect(menuReducer(undefined, {type: 'no-action'})).toEqual(initialState);  
    })
    
    it('Toggle Menu', ()=>{
      expect(menuReducer(data, creators.menuToggle())).toEqual({show:false});
    });
  });