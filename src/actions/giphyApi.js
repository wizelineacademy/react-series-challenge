import { createActions } from 'redux-actions';

const FETCH_TRENDING_GIFS = 'FETCH_TRENDING_GIFS';
const RECEIVE_TRENDING_GIFS = 'RECEIVE_TRENDING_GIFS';

const { fetchTrendingGifs, receiveTrendingGifs } = createActions({
  [FETCH_TRENDING_GIFS]: (page = 0) => ({ page }),
  [RECEIVE_TRENDING_GIFS]: (gifs) => ({ gifs }),
});

export {
  fetchTrendingGifs,
  receiveTrendingGifs,
}