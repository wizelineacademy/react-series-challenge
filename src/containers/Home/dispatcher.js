import actions from './actions';
import locationActions from '../Location/actions';

const { loadTrendingGifs, searchGifs } = actions.creators;
const { setPath } = locationActions.creators;

const dispatcher = dispatch => ({
  loadTrendingGifs: params => dispatch(loadTrendingGifs(params)),
  searchGifs: params => dispatch(searchGifs(params)),
  setPath: params => dispatch(setPath(params)),
});

export default dispatcher;
