import { createActions, createAction } from 'redux-actions';

const TRENDING_GIFS_LOAD = 'TRENDING_GIFS_LOAD';
const LOADING_SET = 'LOADING_SET';
const GIFS_SET = 'GIFS_SET';
/*
const createActions({
  getTrendingGifs: 
})
*/
const loadTrendingGifs = createAction(TRENDING_GIFS_LOAD);
const setLoading = createAction(LOADING_SET);
const setGifs = createAction(GIFS_SET);

export default {
  types: {
    TRENDING_GIFS_LOAD,
    LOADING_SET,
    GIFS_SET,
  },
  creators: {
    loadTrendingGifs,
    setLoading,
    setGifs,
  },
};
