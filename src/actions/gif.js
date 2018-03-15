const REQUEST_GIF = 'REQUEST_GIF';
const LOADING_GIF = 'LOADING_GIF';
const GET_GIF = 'GET_GIF';
const SET_GIF_ERROR = 'SET_GIF_ERROR';

const requestGIF = id => ({ type: REQUEST_GIF, payload: id });
const loadingGif = () => ({ type: LOADING_GIF });
const loadGif = payload => ({ type: GET_GIF, payload });
const setError = error => ({ type: SET_GIF_ERROR, payload: error });

export default {
  types: { REQUEST_GIF, LOADING_GIF, GET_GIF, SET_GIF_ERROR },
  creators: { requestGIF, loadingGif, loadGif, setError },
};
