import actions from './actions';
import locationActions from '../Location/actions';

const { loadFavorites, searchFavorites } = actions.creators;
const { setPath } = locationActions.creators;

const dispatcher = dispatch => ({
  loadFavorites: params => dispatch(loadFavorites()),
  searchFavorites: params => dispatch(searchFavorites({ term: params })),
  setPath: params => dispatch(setPath(params)),
});

export default dispatcher;
