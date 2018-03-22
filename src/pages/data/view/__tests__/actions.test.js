import * as actions from '../actions';

describe('Actions - View', () => {
  it('Set Current Gif', () => {
    expect(actions.setCurrentGif()).toMatchSnapshot();
  });

  it('Get Gif By Id Pending', () => {
    expect(actions.getGifId({})).toMatchSnapshot();
  });

  it('Get Gif By Id Success', () => {
    expect(actions.getGifIdSuccess({})).toMatchSnapshot();
  });

  it('Get Gif By Id Error', () => {
    expect(actions.getGifIdError('Message')).toMatchSnapshot();
  });
});
