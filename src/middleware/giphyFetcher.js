import axios from 'axios';
import appActions from "../actions";

const { GIGHY_GET } = appActions.types;
const { fetchedGiphies } = appActions.creators;

const API_URL = 'http://api.giphy.com/v1/gifs/trending?api_key='+ process.env.REACT_APP_GIPHY_API_KEY;

const fetchGiphies = (dispatch) => {
    axios.get(`${API_URL}`)
        .then((response) => dispatch(fetchedGiphies({ ...response.data })));
};

const giphyFetcher = (store) => (next) => (action) => {
    const { type } = action;

    if (type === GIGHY_GET) {
        fetchGiphies(store.dispatch);
    }

    return next(action);
};

export default giphyFetcher;
