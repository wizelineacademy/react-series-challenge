import actions from '../Favorites/actions';
import modalActions from '../GifModal/actions';

const { openModal, setModalGif } = modalActions.creators;
const { addFavoriteId, removeFavoriteId } = actions.creators;

const dispatcher = dispatch => ({
  addFavoriteId: params => dispatch(addFavoriteId({ id: params })),
  removeFavoriteId: params => dispatch(removeFavoriteId({ id: params })),
  openModal: params => {
    dispatch(setModalGif({ gif: params.gif }));
    dispatch(openModal());
  },
});

export default dispatcher;
