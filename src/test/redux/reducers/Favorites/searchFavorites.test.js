import reducer from '../../../../redux/reducers/Favorites/searchFavorites.js';
import actions from '../../../../redux/actions/favorites';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        isSearching: false,
        favoritesMatched: {},
      });
  });

  it('should handle GIFT_FETCHED', () => {
    const fetchAction = {
      type: actions.types.SEARCH_FAVORITE,
      payload: {}
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, fetchAction)).toEqual({});
  });
});