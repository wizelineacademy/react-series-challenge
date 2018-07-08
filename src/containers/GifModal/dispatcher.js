import favoriteActions from '../Favorites/actions';
import actions from './actions';

const { addFavoriteId, removeFavoriteId } = favoriteActions.creators;

const { closeModal } = actions.creators;

const dispatcher = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  addFavoriteId: params => dispatch(addFavoriteId({ id: params })),
  removeFavoriteId: params => dispatch(removeFavoriteId({ id: params })),
});

export default dispatcher;
