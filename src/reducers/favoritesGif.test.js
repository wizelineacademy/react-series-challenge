import reducer from './favoritesGif';
import favoritesGifs from '../actions/favoritesGifs';
const initialState = {
  allGifs: {},
  filtered: {}
};

describe('favorites gifs reducer', () => {
  it('should return initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });
  it('should handle ADD_GIF', () => {
    const gif = { id: '123', name: ''};
    const expectedState = {
      allGifs: { '123': gif },
      filtered: {}
    };
    const state = reducer(initialState, {
      type: favoritesGifs.types.ADD_GIF,
      payload: gif,
    });
    expect(state).toEqual(expectedState);
  });
  it('should handle REMOVE_GIF', () => {
    const gif = { id: '123', name: ''};
    const beforeState = {
      allGifs: { '123': gif  },
      filtered: {}
    };
    const afterState = {
      allGifs: {},
      filtered: {}
    };
    const state = reducer(beforeState, {
      type: favoritesGifs.types.REMOVE_GIF,
      payload: gif.id,
    });
    expect(state).toEqual(afterState);
  });
  it('should handle FILTER_GIFS', () => {
    const term = 'f1';
    const gifs = {
      '123': { id: '123', title: 'f1 test 1' },
      '456': { id: '456', title: 'f1 test 2' },
      '678': { id: '678', title: 'foobar' },
    };
    const beforeState = {
      allGifs: gifs,
      filtered: {}
    };
    const expectedState = {
      allGifs: gifs,
      filtered: {
        '123': { id: '123', title: 'f1 test 1' },
        '456': { id: '456', title: 'f1 test 2' },
      }
    };
    const state = reducer(beforeState, {
      type: favoritesGifs.types.FILTER_GIFS,
      payload: term,
    });
    expect(state).toEqual(expectedState);
  });
  it('should handle FILTER_GIFS_CLEAR', () => {
    const gif = { id: '123', name: ''};
    const beforeState = {
      allGifs: {},
      filtered: { '123': gif  }
    };
    const afterState = {
      allGifs: {},
      filtered: {}
    };
    const state = reducer(beforeState, {
      type: favoritesGifs.types.FILTER_GIFS_CLEAR,
    });
    expect(state).toEqual(afterState);
  });
});