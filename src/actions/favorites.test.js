import * as favorites from './favorites';
let creators = favorites.default.creators;
let types = favorites.default.types;
let giphy = {id:55};
let filter = 'anime';
describe('Favorite Actions', () => {
  
  it('Toggle Favorite', ()=>{
    expect(creators.toggleFavorite(giphy )).toEqual({
        type:types.FAVORITE_TOGGLE,
        payload:giphy
    });
  });
  it('Filter Favorites', ()=>{
    expect(creators.filterFavorite(filter )).toEqual({
        type:types.FAVORITE_FILTER,
        filter:filter
    });
  });
});
