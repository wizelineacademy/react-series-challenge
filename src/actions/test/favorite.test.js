import {TOGGLE_FAVORITE, toggleFavorite, UPDATE_FILTERED_FAVORITES, updateFilteredFavorites} from "../favorite";

const mockGif = {};

describe('favorite action', () => {
  it('should return action', () => {
    expect(toggleFavorite(mockGif)).toEqual({
      type: TOGGLE_FAVORITE,
      payload: mockGif
    })
  });

  it('should return the favorites filtered', () => {
    const filteredFavorites = [];
    expect(updateFilteredFavorites(filteredFavorites)).toEqual({
      type: UPDATE_FILTERED_FAVORITES,
      payload: filteredFavorites
    })
  });
});
