import favoriteActions from '../../actions/favoriteActions';

describe('Test favoriteActions', () => {
  it('actionCreator: toggleFavorite', () => {
    expect(favoriteActions.creators.toggleFavorite()).toEqual({ type: 'TOGGLE_FAVORITE' });
  });
});
