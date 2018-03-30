import reducer from './searchingGifs';
import searchingGifs from '../actions/searchingGifs';
const initialState = {
  data: [],
  isLoading: false,
  error: null,
  term: '',
};

describe('searching gifs reducer', () => {
  it('should return initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });
  it('should handle SEARCH_GIFS_REQUESTED', () => {
    const term = '123';
    const expectedState = {
      data: [],
      isLoading: true,
      error: null,
      term: term,
    };
    const state = reducer(initialState, {
      type: searchingGifs.types.SEARCH_GIFS_REQUESTED,
      payload: term,
    });
    expect(state).toEqual(expectedState);
  });
  it('should handle SEARCH_GIFS_COMPLETED', () => {
    const gifs = [{ name: '', url: '' }, { name: '', url: '' }];
    const expectedState = {
      data: gifs,
      isLoading: false,
      error: null,
      term: '',
    };
    const state = reducer(initialState, {
      type: searchingGifs.types.SEARCH_GIFS_COMPLETED,
      payload: gifs,
    });
    expect(state).toEqual(expectedState);
  });
  it('should handle SEARCH_GIFS_FAILED', () => {
    const err = { statusCode: 400, message: 'Bad request' };
    const expectedState = {
      data: [],
      isLoading: false,
      error: err,
      term: '',
    };
    const state = reducer(initialState, {
      type: searchingGifs.types.SEARCH_GIFS_FAILED,
      payload: err,
    });
    expect(state).toEqual(expectedState);
  });
  it('should handle SEARCH_GIFS_CLEAR', () => {
    const expectedState = {
      data: [],
      isLoading: false,
      error: null,
      term: '',
    };
    const state = reducer(initialState, {
      type: searchingGifs.types.SEARCH_GIFS_CLEAR,
    });
    expect(state).toEqual(expectedState);
  });
});