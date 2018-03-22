import reducer from '../reducer';
import * as actions from '../actions';

describe('View - Reducer', () => {
  it('Must set a selected gif as current', () => {
    const initialState = reducer(undefined, {});

    const gif = { id: 'a'};

    expect(reducer(
      initialState,
      actions.setCurrentGif(gif),
    )).toMatchSnapshot();
  });

  it('Get Gif By Id Success', () => {
    const initialState = reducer(undefined, {});

    const gif = { id: 'a'};

    expect(reducer(
      initialState,
      actions.getGifIdSuccess(gif),
    )).toMatchSnapshot();
  });

  it('Get Gif By Id Error', () => {
    const initialState = reducer(undefined, {});

    const error = 'Error';

    expect(reducer(
      initialState,
      actions.getGifIdError(error),
    )).toMatchSnapshot();
  });
});
