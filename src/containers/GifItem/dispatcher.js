import actions from '../Favorites/actions';

const { addFavorite } = actions.creators;

const dispatcher = dispatch => ({
  addFavorite: params => dispatch(addFavorite({ id: params })),
});

export default dispatcher;
