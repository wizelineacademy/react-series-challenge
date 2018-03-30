import reducer from './detailGif';
import detailGif from '../actions/detailGif';
const initialState = {
  gifId: null,
  gif: {},
  isLoading: false,
  error: null,
};

describe('detail gif reducer', () => {
  it('should return initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });
  it('should handle GET_SINGLE_GIF_REQUESTED', () => {
    const gifId = '123';
    const expectedState = {
      gifId: gifId,
      gif: {},
      isLoading: true,
      error: null,
    };
    const state = reducer(initialState, {
      type: detailGif.types.GET_SINGLE_GIF_REQUESTED,
      payload: gifId,
    });
    expect(state).toEqual(expectedState);
  });
  it('should handle GET_SINGLE_GIF_COMPLETED', () => {
    const gif = { name: '', url: '' };
    const expectedState = {
      gifId: null,
      gif: gif,
      isLoading: false,
      error: null,
    };
    const state = reducer(initialState, {
      type: detailGif.types.GET_SINGLE_GIF_COMPLETED,
      payload: gif,
    });
    expect(state).toEqual(expectedState);
  });
  it('should handle GET_SINGLE_GIF_FAILED', () => {
    const err = { statusCode: 400, message: 'Bad request' };
    const expectedState = {
      gifId: null,
      gif: {},
      isLoading: false,
      error: err,
    };
    const state = reducer(initialState, {
      type: detailGif.types.GET_SINGLE_GIF_FAILED,
      payload: err,
    });
    expect(state).toEqual(expectedState);
  });
});