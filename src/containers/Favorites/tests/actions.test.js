import actions from '../actions';

describe('Favorites container actions', () => {
  it('should correctly create the actions', () => {
    expect(actions.creators.addFavoriteId({ id: 'id.1' })).toMatchSnapshot();
    expect(actions.creators.removeFavoriteId({ id: 'id.1' })).toMatchSnapshot();
    expect(actions.creators.loadFavorites()).toMatchSnapshot();
    expect(actions.creators.setLoadingFavorites(true)).toMatchSnapshot();
    expect(actions.creators.setFavorites([])).toMatchSnapshot();
    expect(
      actions.creators.searchFavorites({ term: 'dogo' })
    ).toMatchSnapshot();
  });
});
