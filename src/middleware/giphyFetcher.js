import axios from 'axios';
import appActions from "../actions";

const {GIGHY_GET} = appActions.types;
const {fetchedGiphies} = appActions.creators;

const API_URL_BASE = 'http://api.giphy.com';
const API_URL_RANDOM = '/v1/gifs/trending?';
const API_URL_SEARCH = '/v1/gifs/search?';
const API_URL_TOKEN = 'api_key=' + process.env.REACT_APP_GIPHY_API_KEY;

const fetchGiphies = (dispatch, state) => {

    const {filter} = state;

    const url = ("" === filter)
        ? `${API_URL_BASE}${API_URL_RANDOM}${API_URL_TOKEN}`
        : `${API_URL_BASE}${API_URL_SEARCH}${API_URL_TOKEN}&q=` + encodeURIComponent(filter);

    axios.get(url)
        .then((response) => dispatch(fetchedGiphies({...response.data})));
};

const giphyFetcher = (store) => (next) => (action) => {
    const {type} = action;

    if (type === GIGHY_GET) {
        fetchGiphies(store.dispatch, store.getState());
    }

    return next(action);
};

export default giphyFetcher;
