import actions from './actions';
const { loadFavorites } = actions.creators;
const dispatcher = dispatch => ({
  loadFavorites: params => dispatch(loadFavorites()),
});

export default dispatcher;
