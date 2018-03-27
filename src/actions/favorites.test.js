import * as favorites from './favorites';
let creators = favorites.default.creators;
let types = favorites.default.types;
let giphy = {id:55};
describe('Favorite Actions', () => {
  
  it('Toggle Favorite', ()=>{
    expect(creators.toggleFavorite(giphy )).toEqual({
        type:types.FAVORITE_TOGGLE,
        payload:giphy
    });
  });
});
