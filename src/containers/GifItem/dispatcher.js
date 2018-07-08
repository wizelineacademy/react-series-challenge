import actions from '../Favorites/actions';

const { addFavoriteId, removeFavoriteId } = actions.creators;

const dispatcher = dispatch => ({
  addFavoriteId: params => dispatch(addFavoriteId({ id: params })),
  removeFavoriteId: params => dispatch(removeFavoriteId({ id: params })),
});

export default dispatcher;
