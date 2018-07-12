import reducer from '../../../../redux/reducers/Favorites/favorites.js';
import actions from '../../../../redux/actions/favorites';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle GIFT_FETCHED', () => {
    const fetchAction = {
      type: actions.types.ADD_FAVORITE,
      payload: {"name":"giftName"}
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, fetchAction)).toEqual({"giftName": {"name": "giftName"}});
  });
  it('should handle DELETE_FAVORITE', () => {
    const fetchAction = {
      type: actions.types.DELETE_FAVORITE,
      payload: {"name":"giftName"}
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, fetchAction)).toEqual({});
  });
});