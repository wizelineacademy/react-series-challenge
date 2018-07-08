import actions from '../Favorites/actions';

const { addFavoriteId } = actions.creators;

const dispatcher = dispatch => ({
  addFavoriteId: params => dispatch(addFavoriteId({ id: params })),
});

export default dispatcher;
