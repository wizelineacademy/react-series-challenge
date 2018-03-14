import * as actions from '../actions';

describe('Actions - Favorites', () => {
  it('Send an object to toggle favorite state', () => {
    expect(actions.toggleFavorite({ id: 'a' })).toMatchSnapshot();
  });
});
