
import axios from 'axios';
import searchGifsActions from '../actions/searchGifs';

const { RECEIVE_SEARCH_GIFS } = searchGifsActions.types;
const { receiveSearchGifs } = searchGifsActions.creators;

const API_URL = process.env.REACT_APP_API_URL+"search?api_key=" + process.env.REACT_APP_API_KEY +"&q=pato&limit=25&rating=G";

const fetchSearchGifs = (dispatch) => {
  console.log("fetching");
  
  axios.get(API_URL)
    .then((response) => dispatch(receiveSearchGifs({ ...response.data })));
};

const searchGifsFetcher = (store) => (next) => (action) => {
  const { type } = action;

  if (type === RECEIVE_SEARCH_GIFS) {
    fetchSearchGifs(store.dispatch);
  }

  return next(action);
};

export default searchGifsFetcher;