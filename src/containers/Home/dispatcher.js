import actions from './actions';

const { loadTrendingGifs, searchGifs } = actions.creators;

const dispatcher = dispatch => ({
  loadTrendingGifs: params => dispatch(loadTrendingGifs(params)),
  searchGifs: params => dispatch(searchGifs(params)),
});

export default dispatcher;
