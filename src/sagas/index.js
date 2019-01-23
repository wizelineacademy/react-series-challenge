import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import {fetchAllGifs,LOAD_All_GIFS} from "../actions/allGifs";
import {fetchSearchGifs,LOAD_SEARCH_GIFS} from "../actions/searchGifs";


//Setting api configuration
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

//get using axios to api Giphy
export const fetchGifs = (url) => {
    return axios.get(url)
        .then((response) => response)
}


// Helper function, convert array to object.
const arrayToObj = (arr) => {
    const obj = {};
    arr.forEach((gif) => {
        obj[gif.id] = gif;
    });
    return obj;
};

//getting all gifs using axios in the fetchGif Function
function* getAllGifs() {

    try {
        const url = `${apiUrl}/gifs/trending?api_key=${apiKey}&limit=10`;
        const {data} = yield call(fetchGifs,url);
        const gifs = arrayToObj(data.data || []);
        yield put(fetchAllGifs({gifs}));

    } catch (e) {
        console.log(e);
    }
}

//getting search gifs using axios in the fetchGif Function
function* getSearchGifs(action) {
    try {
        const search = action.payload || '';
        const url = `${apiUrl}/gifs/search?api_key=${apiKey}&limit=10&q=${search}`;
        const {data} = yield call(fetchGifs,url);
        const gifs = arrayToObj(data.data || []);
        yield put(fetchSearchGifs({gifs}));

    } catch (e) {
        console.log(e);
    }
}

//Wait to load all gifs
function* loadAllGifs(){
    yield takeEvery(LOAD_All_GIFS,getAllGifs);
}
//Wait to load search gifs
function* loadSearchGifs(){
    yield takeEvery(LOAD_SEARCH_GIFS,getSearchGifs);
}

function* rootSaga() {
    yield all([
        loadAllGifs(),
        loadSearchGifs(),
    ]);
}

export default rootSaga;