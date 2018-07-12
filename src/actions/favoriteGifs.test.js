import favoriteGifs from './favoriteGifs';

describe('trendingGifs creators', () => {
  const {
    FAVORITE_ADD,
    FAVORITE_ADD_TO_STATE,
    FAVORITE_FETCH,
    FAVORITE_HYDRATE,
    FAVORITE_REMOVE,
    FAVORITE_REMOVE_FROM_STATE,
  } = favoriteGifs.types;
  const {
    addFavorite,
    addFavoriteToState,
    fetchFavorite,
    hydrateFavorite,
    removeFavorite,
    removeFavoriteFromState,
  } = favoriteGifs.creators;

  let param = null;
  let expectedAction = null;

  beforeEach(() => {
    param = {
      payload: { foo: '' },
    };
    expectedAction = {
      type: '',
    };
  });

  it('exposes a correct addFavorite action creator', () => {
    expectedAction.type = FAVORITE_ADD;
    expectedAction.payload = { foo: '' };
    expect(addFavorite(param)).toEqual(expectedAction);
  });

  it('exposes a correct addFavoriteToState action creator', () => {
    expectedAction.type = FAVORITE_ADD_TO_STATE;
    expectedAction.payload = { foo: '' };
    expect(addFavoriteToState(param)).toEqual(expectedAction);
  });

  it('exposes a correct fetchFavorite action creator', () => {
    expectedAction.type = FAVORITE_FETCH;
    expect(fetchFavorite()).toEqual(expectedAction);
  });

  it('exposes a correct hydrateFavorite action creator', () => {
    expectedAction.type = FAVORITE_HYDRATE;
    expectedAction.payload = { foo: '' };
    expect(hydrateFavorite(param)).toEqual(expectedAction);
  });

  it('exposes a correct removeFavorite action creator', () => {
    expectedAction.type = FAVORITE_REMOVE;
    expectedAction.payload = { foo: '' };
    expect(removeFavorite(param)).toEqual(expectedAction);
  });

  it('exposes a correct removeFavoriteFromState action creator', () => {
    expectedAction.type = FAVORITE_REMOVE_FROM_STATE;
    expectedAction.payload = { foo: '' };
    expect(removeFavoriteFromState(param)).toEqual(expectedAction);
  });
});
