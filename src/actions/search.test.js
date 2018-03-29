import * as search from './search';
let creators = search.default.creators;
let types = search.default.types;
let q = 'anime';
let gif = {id: 55};
let error = {message: 'invalid api key'}

describe('Search Actions', () => {
  
  it('Request', ()=>{
    expect(creators.search(q)).toEqual({
        type:types.SEARCH_REQUEST,
        q: q
    });
  });
  it('Response Returning', ()=>{
    expect(creators.searchCompleted([gif, gif])).toEqual({
        type:types.SEARCH_COMPLETED,
        gifs: [gif, gif]
    });
  });
  it('Error Returning', ()=>{
    expect(creators.searchFailed(error)).toEqual({
        type:types.SEARCH_FAILED,
        error: error
    });
  });
});
