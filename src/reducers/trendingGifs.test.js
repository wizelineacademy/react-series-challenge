import reducer from './trendingGifs';
import trendingGifs from '../actions/trendingGifs';
const initialState = {
  data: [],
  isLoading: false,
  error: null
};

describe('trending gifs reducer', () => {
  it('should return initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });
  it('should handle GET_TRENDING_GIFS_REQUESTED', () => {
    const expectedState = {
      data: [],
      isLoading: true,
      error: null
    };
    const state = reducer(initialState, {
      type: trendingGifs.types.GET_TRENDING_GIFS_REQUESTED,
    });
    expect(state).toEqual(expectedState);
  });
  it('should handle GET_TRENDING_GIFS_COMPLETED', () => {
    const gifs = [{ name: '', url: '' }, { name: '', url: '' }];
    const expectedState = {
      data: gifs,
      isLoading: false,
      error: null
    };
    const state = reducer(initialState, {
      type: trendingGifs.types.GET_TRENDING_GIFS_COMPLETED,
      payload: gifs,
    });
    expect(state).toEqual(expectedState);
  });
  it('should handle GET_TRENDING_GIFS_FAILED', () => {
    const err = { statusCode: 400, message: 'Bad request' };
    const expectedState = {
      data: [],
      isLoading: false,
      error: err
    };
    const state = reducer(initialState, {
      type: trendingGifs.types.GET_TRENDING_GIFS_FAILED,
      payload: err,
    });
    expect(state).toEqual(expectedState);
  });
});