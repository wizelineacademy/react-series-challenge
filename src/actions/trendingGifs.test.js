import trendingGifs from './trendingGifs';

describe('trending gif actions', () => {
  it('should create an action to request trending gifs', () => {
    const expectedAction = {
      type: trendingGifs.types.GET_TRENDING_GIFS_REQUESTED,
    };
    expect(trendingGifs.creators.getTrendingGifsRequested())
      .toEqual(expectedAction);
  });
  it('should create an action to save trending gifs', () => {
    const gifs = [{ name: '', url: '' }, { name: '', url: '' }];
    const expectedAction = {
      type: trendingGifs.types.GET_TRENDING_GIFS_COMPLETED,
      payload: gifs
    };
    expect(trendingGifs.creators.getTrendingGifsCompleted(gifs))
      .toEqual(expectedAction);
  });
  it('should create an action specify an error when requesting a gif', () => {
    const err = { statusCode: 400, message: 'Bad request' };
    const expectedAction = {
      type: trendingGifs.types.GET_TRENDING_GIFS_FAILED,
      payload: err
    };
    expect(trendingGifs.creators.getTrendingGifsFailed(err))
      .toEqual(expectedAction);
  });
});