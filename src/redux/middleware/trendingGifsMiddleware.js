
import axios from 'axios';
import trendingGifsActions from '../actions/trendingGifs';

const { RECEIVE_TRENDING_GIFS } = trendingGifsActions.types;
const { receiveTrendingGifs } = trendingGifsActions.creators;

const API_URL = process.env.REACT_APP_API_URL+"trending?api_key=" + process.env.REACT_APP_API_KEY +"&limit=25&rating=G";

const fetchTrendingGifs = (dispatch) => {
  console.log("fetch");
  
  axios.get(API_URL)
    .then((response) => dispatch(receiveTrendingGifs({ ...response.data })));
};

const trendingGifsFetcher = (store) => (next) => (action) => {
  const { type } = action;

  if (type === RECEIVE_TRENDING_GIFS) {
    fetchTrendingGifs(store.dispatch);
  }

  return next(action);
};

export default trendingGifsFetcher;