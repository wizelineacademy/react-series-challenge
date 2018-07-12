import favorite from 'actions/favorite'

let { creators, types } = favorite

describe('Favorite types and creators', () => {
  it('should create an action to get favorite gifs', () => {
    const payload = {}
    const expectedAction = {
      type: types.FAVORITE_GET,
      payload
    }
    expect(creators.getFavoriteGifs(payload)).toEqual(expectedAction);
  });

  it('should create an action to add favorite gifs', () => {
    const payload = {}
    const expectedAction = {
      type: types.FAVORITE_ADD,
      payload
    }
    expect(creators.addFavorite(payload)).toEqual(expectedAction);
  });

  it('should create an action to remove favorite gifs', () => {
    const payload = {}
    const expectedAction = {
      type: types.FAVORITE_REMOVE,
      payload
    }
    expect(creators.removeFavorite(payload)).toEqual(expectedAction);
  });
});