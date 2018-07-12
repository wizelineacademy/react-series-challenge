import dispatcher from '../dispatcher';
import actions from '../actions';
import locationActions from '../../Location/actions';

describe('Favorites dispatcher', () => {
  it('should dispatch a loadFavorites action', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).loadFavorites();
    expect(dispatch.mock.calls[0][0]).toEqual(actions.creators.loadFavorites());
  });

  it('should dispatch a searchFavorites action with term as payload', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).searchFavorites('dogo');
    expect(dispatch.mock.calls[0][0]).toEqual(
      actions.creators.searchFavorites({ term: 'dogo' })
    );
  });

  it('should dispatch a location action setPath with params as payload', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).setPath('/favorites');
    expect(dispatch.mock.calls[0][0]).toEqual(
      locationActions.creators.setPath('/favorites')
    );
  });
});
