import favoritesActions from '../../Favorites/actions';
import modalActions from '../../GifModal/actions';
import dispatcher from '../dispatcher';

describe('GifItem dispatcher props', () => {
  it('should dispatch an addFavoriteId action with an id inside the paylod', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).addFavoriteId('id.1');
    expect(dispatch.mock.calls[0][0]).toEqual(
      favoritesActions.creators.addFavoriteId({ id: 'id.1' })
    );
  });

  it('should dispatch an removeFavoriteId action with an id inside the paylod', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).removeFavoriteId('id.1');
    expect(dispatch.mock.calls[0][0]).toEqual(
      favoritesActions.creators.removeFavoriteId({ id: 'id.1' })
    );
  });

  it('should dispatch an setModalGif action and openModal action', () => {
    const dispatch = jest.fn();
    const sampleGif = { id: 'id.1' };
    dispatcher(dispatch).openModal({ gif: sampleGif });

    expect(dispatch.mock.calls[0][0]).toEqual(
      modalActions.creators.setModalGif({ gif: sampleGif })
    );

    expect(dispatch.mock.calls[1][0]).toEqual(
      modalActions.creators.openModal()
    );
  });
});
