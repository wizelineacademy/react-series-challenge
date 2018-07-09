import { createActions } from 'redux-actions';

const FETCH_TRENDING_GIFS = 'FETCH_TRENDING_GIFS';
const RECEIVE_TRENDING_GIFS = 'RECEIVE_TRENDING_GIFS';
const RECEIVE_NEXT_PAGE_TRENDING_GIFS = 'RECEIVE_NEXT_PAGE_TRENDING_GIFS';

const { fetchTrendingGifs, receiveTrendingGifs, receiveNextPageTrendingGifs } = createActions({
  [FETCH_TRENDING_GIFS]: (search = '', page = 0) => ({ search, page }),
  [RECEIVE_TRENDING_GIFS]: (gifs) => ({ gifs }),
  [RECEIVE_NEXT_PAGE_TRENDING_GIFS]: (gifs) => ({ gifs }),
});

export {
  fetchTrendingGifs,
  receiveTrendingGifs,
  receiveNextPageTrendingGifs,
}