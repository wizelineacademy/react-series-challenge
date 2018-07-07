import actions from './actions';

const { loadTrendingGifs } = actions.creators;

const dispatcher = dispatch => ({
  loadTrendingGifs: params => dispatch(loadTrendingGifs(params)),
});

export default dispatcher;
