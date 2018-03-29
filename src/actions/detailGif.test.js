import detailGif from './detailGif';

describe('detail gif actions', () => {
  it('should create an action to request a specific gif', () => {
    const gifId = '123';
    const expectedAction = {
      type: detailGif.types.GET_SINGLE_GIF_REQUESTED,
      payload: gifId
    };
    expect(detailGif.creators.getSingleGifRequested(gifId))
      .toEqual(expectedAction);
  });
  it('should create an action to save a specific gif', () => {
    const gif = { name: '', url: '' };
    const expectedAction = {
      type: detailGif.types.GET_SINGLE_GIF_COMPLETED,
      payload: gif
    };
    expect(detailGif.creators.getSingleGifCompleted(gif))
      .toEqual(expectedAction);
  });
  it('should create an action specify an error when requesting a gif', () => {
    const err = { statusCode: 400, message: 'Bad request' };
    const expectedAction = {
      type: detailGif.types.GET_SINGLE_GIF_FAILED,
      payload: err
    };
    expect(detailGif.creators.getSingleGifFailed(err))
      .toEqual(expectedAction);
  });
});