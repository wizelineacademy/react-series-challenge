import axios from 'axios';
import trendingActions from '../actions/trending';

const { TRENDING_GIFS_GET } = trendingActions.types;

const { fetchedTrendingGifs } = trendingActions.creators;

const API_URL = 'http://api.giphy.com/v1/gifs';

const fetchTrendingGifs = (dispatch) => {
  axios.get(`${API_URL}/trending?api_key=${process.env.REACT_APP_API_KEY}`)
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
