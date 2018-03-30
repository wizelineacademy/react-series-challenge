import trendingActions from '../../actions/trending';

describe('action creators for trending', () => {

  it('Action creator: getTrendingRequested', () => {
    const request = trendingActions.creators.getTrendingRequested();
    expect(request).toEqual({type: 'GET_TRENDING_REQUESTED'});
  });

  it('Action creator: getTrendingCompleted', () =>{
    const trending = { data: {id: 1234, image: 'https://image.gif'}}
    const request = trendingActions.creators.getTrendingCompleted(trending);
    expect(request).toEqual({type: 'GET_TRENDING_COMPLETED', trending});
  });

  it('Action creator: getTrendingFailed', () => {
    const error = "error 1";
    const request = trendingActions.creators.getTrendingFailed(error);
    expect(request).toEqual({type: 'GET_TRENDING_FAILED', error});
  });
});
