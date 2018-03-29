
import * as trending from './trending';
let creators = trending.default.creators;
let types = trending.default.types;
let gif = {id: 55}
let error = {message: 'invalid api key'}

describe('Trending Actions', () => {
  it('Request', ()=>{
    expect(creators.getTrendingRequested()).toEqual({
        type:types.TRENDING_REQUEST
    });
  });
  it('Response Returning', ()=>{
    expect(creators.getTrendingCompleted([gif, gif])).toEqual({
        type:types.TRENDING_COMPLETED,
        gifs: [gif, gif]
    });
  });
  it('Error Returning', ()=>{
    expect(creators.getTrendingFailed(error)).toEqual({
        type:types.TRENDING_FAILED,
        error: error
    });
  });
});