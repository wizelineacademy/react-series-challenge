import axios from 'axios';
import trendingGifsActions from '../actions/trendingGifs';

const { TRENDING_GIFS_GET } = trendingGifsActions.types;
const { fetchedTrendingGifs } = trendingGifsActions.creators;

const API_URL = 'https://api.giphy.com/v1/gifs/';

const fetchTrending = (dispatch) => {
  axios.get(`${API_URL}trending?api_key=SA3WrTOcAq5bNF9hsWC4Z8j0O1UkOMuB&limit=25&rating=G`)
    .then((response) => dispatch(fetchedTrendingGifs({ ...response })));
};

const trendingFetcher = (store) => (next) => (action) => {
  const { type } = action;

  if (type === TRENDING_GIFS_GET) {
    fetchTrending(store.dispatch);
  }

  return next(action);
};

export default trendingFetcher;
