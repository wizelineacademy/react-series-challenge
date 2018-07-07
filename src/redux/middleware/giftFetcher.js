import axios from 'axios';
import giftActions from '../actions/gifts';
import { API_KEY } from '../../constants';

const { GET_GIFT } = giftActions.types;
const { giftFetched } = giftActions.creators;

const fetchGifts = (text, dispatch) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${text.replace(/\s/g,'+')}&limit=25&offset=0&rating=G&lang=en`)
    .then((response) => dispatch(giftFetched({ ...response.data })));
};

const fecthTrend = (text, dispatch) => {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=G`)
    .then((response) => dispatch(giftFetched({ ...response.data })));
};

const priceFetcher = (store) => (next) => (action) => {
    const { type, payload } = action;
    const { text } = payload

    if (type === GET_GIFT) {
        if(text !== ""){
            fetchGifts(text, store.dispatch);
        }
        else{
            fecthTrend(text, store.dispatch);
        }
    }

  return next(action);
};

export default priceFetcher;
