import {TOGGLE_FAVORITE, toggleFavorite} from "../favorite";

const mockGif = {};

describe('favorite action', () => {
  it('should return action', () => {
    expect(toggleFavorite(mockGif)).toEqual({
      type: TOGGLE_FAVORITE,
      payload: mockGif
    })
  });
});
