import favoriteReducer from 'reducers/favorite';
import favoriteActions from 'actions/favorite';

describe('favoriteReducer', () => {
  it('should return the initial state', () => {
    expect(favoriteReducer(undefined, {})).toEqual({"favorite": {}, "search": {}, "trending": {}});
  });

  it('should handle FAVORITE_ADD', () => {
    const startAction = {
      type: favoriteActions.types.FAVORITE_ADD,
      payload: {gif: {id: 'test'}}
    };
    expect(favoriteReducer({}, startAction)).toEqual({"test": {"id": "test", "liked": true}});
  });
});