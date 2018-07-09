import axios from 'axios';
import trendingActions from '../actions/trending';
import searchActions from '../actions/search';

const { TRENDING_GIFS_GET } = trendingActions.types;
const { SEARCH_GIFS_GET } = searchActions.types

const { fetchedTrendingGifs } = trendingActions.creators;
const { fetchedSearchGifs } = searchActions.creators;

const API_URL = 'http://api.giphy.com/v1/gifs';

const fetchTrendingGifs = (dispatch) => {
  axios.get(`${API_URL}/trending?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => dispatch(fetchedTrendingGifs({ ...response.data })));
}

const fetchSearchGifs = (dispatch, query) => {
  axios.get(`${API_URL}/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}`)
    .then(response => dispatch(fetchedSearchGifs({ ...response.data })));
}

const fetcher = (store) => (next) => (action) => {
  const { type } = action;

  if(type === TRENDING_GIFS_GET) {
    fetchTrendingGifs(store.dispatch);
  }
  if(type === SEARCH_GIFS_GET) {
    fetchSearchGifs(store.dispatch, action.payload);
  }

  return next(action);
}

export default fetcher;
