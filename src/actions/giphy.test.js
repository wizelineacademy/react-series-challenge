import * as giphy from './giphy';
let creators = giphy.default.creators;
let types = giphy.default.types;
let giphy_id = 55;
let gif = {id: 55};
let error = {message: 'invalid api key'}

describe('Giphy Load Actions', () => {
  
  it('Request', ()=>{
    expect(creators.giphyRequest(giphy_id )).toEqual({
        type:types.GIPHY_REQUEST,
        id: giphy_id
    });
  });
  it('Response Returning', ()=>{
    expect(creators.giphyCompleted(gif)).toEqual({
        type:types.GIPHY_COMPLETED,
        gif: gif
    });
  });
  it('Error Returning', ()=>{
    expect(creators.giphyFailed(error)).toEqual({
        type:types.GIPHY_FAILED,
        error: error
    });
  });
});
