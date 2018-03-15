import * as actions from '../actions';

describe('Actions - Favorites', () => {
  it('Send an object to toggle favorite state', () => {
    expect(actions.toggleFavorite({ id: 'a' })).toMatchSnapshot();
  });

  it('Set a text to filtered the favorite list', () => {
    expect(actions.filterFavorites('cat')).toMatchSnapshot();
  });
});
