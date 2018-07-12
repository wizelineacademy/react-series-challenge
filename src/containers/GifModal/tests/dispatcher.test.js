import actions from '../actions';
import favoriteActions from '../../Favorites/actions';
import dispatcher from '../dispatcher';

describe('GifModal dispatcher', () => {
  it('should dispatch a closeModal action', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).closeModal();
    expect(dispatch.mock.calls[0][0]).toEqual(actions.creators.closeModal());
  });

  it('should dispatch an addFavoriteId action with an id as payload', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).addFavoriteId('id.1');
    expect(dispatch.mock.calls[0][0]).toEqual(
      favoriteActions.creators.addFavoriteId({ id: 'id.1' })
    );
  });

  it('should dispatch an removeFavoriteId action with an id as payload', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).removeFavoriteId('id.1');
    expect(dispatch.mock.calls[0][0]).toEqual(
      favoriteActions.creators.removeFavoriteId({ id: 'id.1' })
    );
  });
});
