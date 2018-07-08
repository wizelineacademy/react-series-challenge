import axios from 'axios';
import gifsActions from '../actions/gifs';

const { TRENDING_GIFS_GET } = gifsActions.types;

const { fetchedTrendingGifs } = gifsActions.creators;

const API_URL = 'http://api.giphy.com/v1/gifs';
const API_KEY = 'YH1JlbYHDQ0cDuUzqglJmP9U5U42YxO5'

const fetchTrendingGifs = (dispatch) => {
  axios.get(`${API_URL}/trending?api_key=${API_KEY}`)
    .then(response => dispatch(fetchedTrendingGifs({ ...response.data })));
}

const fetcher = (store) => (next) => (action) => {
  const { type } = action;

  if(type === TRENDING_GIFS_GET) {
    fetchTrendingGifs(store.dispatch);
  }

  return next(action);
}

export default fetcher;
