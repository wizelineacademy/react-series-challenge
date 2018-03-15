import favorites, { defaultState } from '../../src/reducers/favorites';
import {
  toggleFavorite,
  TOGGLE_FAVORITE
} from '../../src/actions/favorites';

describe('favorites reducer', () => {
  it('should return default state when given an unknown action', () => {
    const action = { type: 'FOO' };
    expect(favorites(undefined, action)).toEqual(defaultState);
  });

  it('should return the same state when given an unknown action', () => {
    const state = {
      1: { id: 1, some: 'foo' },
      3: { id: 3, some: 'bar' },
    };
    const action = { type: 'FOO' };

    expect(favorites(state, action)).toEqual(state);
  });

  describe(`for ${TOGGLE_FAVORITE} action`, () => {
    it('should return the state with the gif if is not there', () => {
      const newGif = { id: 1, some: "woot" };
      const expected = {
        1: newGif
      };

      expect(favorites(defaultState, toggleFavorite(newGif))).toEqual(expected);
    });

    it('should return the state without the gif if is already there', () => {
      const existingGif = { id: 1, some: "foo" };
      const state = {
        1: existingGif
      };
      const expected = {};

      expect(favorites(state, toggleFavorite(existingGif))).toEqual(expected);
    });

    it('should preserve existing state when adding gifs', () => {
      const newGif = { id: 2, some: "woot" };
      const state = {
        1: { id: 1, some: 'foo' },
      };
      const expected = {
        1: { id: 1, some: 'foo' },
        2: newGif
      };

      expect(favorites(state, toggleFavorite(newGif))).toEqual(expected);
    });

    it('should preserve existing state when removing gifs', () => {
      const existingGif = { id: 2, some: "woot" };
      const state = {
        1: { id: 1, some: 'foo' },
        2: { id: 2, some: "woot" }
      };
      const expected = {
        1: { id: 1, some: 'foo' }
      };

      expect(favorites(state, toggleFavorite(existingGif))).toEqual(expected);
    });
  });
});
