import actions from './actions';
const { loadFavorites, searchFavorites } = actions.creators;
const dispatcher = dispatch => ({
  loadFavorites: params => dispatch(loadFavorites()),
  searchFavorites: params => dispatch(searchFavorites({ term: params })),
});

export default dispatcher;
