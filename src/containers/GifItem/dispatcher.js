import actions from '../Favorites/actions';
import modalActions from '../GifModal/actions';

const { openModal, setGif } = modalActions.creators;
const { addFavoriteId, removeFavoriteId } = actions.creators;

const dispatcher = dispatch => ({
  addFavoriteId: params => dispatch(addFavoriteId({ id: params })),
  removeFavoriteId: params => dispatch(removeFavoriteId({ id: params })),
  openModal: params => {
    dispatch(openModal());
  },
});

export default dispatcher;
