import { createActions, createAction } from 'redux-actions';

const TRENDING_GIFS_LOAD = 'TRENDING_GIFS_LOAD';
const LOADING_SET = 'LOADING_SET';
const GIFS_SET = 'GIFS_SET';
const GIFS_SEARCH = 'GIFS_SEARCH';
/*
const createActions({
  getTrendingGifs: 
})
*/
const loadTrendingGifs = createAction(TRENDING_GIFS_LOAD);
const setLoading = createAction(LOADING_SET);
const setGifs = createAction(GIFS_SET);
const searchGifs = createAction(GIFS_SEARCH);

export default {
  types: {
    TRENDING_GIFS_LOAD,
    LOADING_SET,
    GIFS_SET,
    GIFS_SEARCH,
  },
  creators: {
    loadTrendingGifs,
    setLoading,
    setGifs,
    searchGifs,
  },
};
