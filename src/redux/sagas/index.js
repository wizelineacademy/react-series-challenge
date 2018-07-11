import axios from 'axios';
import { all, call, takeEvery, put } from 'redux-saga/effects'; 
import giftActions from '../actions/gifts';
import { API_KEY, API_URL } from '../../constants';

const {
    GET_GIFT,
} = giftActions.types;

const {
  giftFetched,
} = giftActions.creators;

export const fetchGifts = (payload) => {
    const { text } = payload;
    if(text === ""){
        return axios.get(`${API_URL}trending?api_key=${API_KEY}&limit=25&rating=G`)
        .then((response) => response.data);
    }else{
        return axios.get(`${API_URL}search?api_key=${API_KEY}&q=${text.replace(/\s/g,'+')}&limit=25&offset=0&rating=G&lang=en`)
        .then((response) => response.data);
    }
};

function* getGifts(action) {
    const { payload } = action; 
    try {
    const { data } = yield call(fetchGifts, payload);

    yield put(giftFetched({ data }));
  } catch (e) {
    
  }
}

function* watchGiftRequested() {
  yield takeEvery(GET_GIFT, getGifts);
}

function* rootSaga () {
  yield all([
    watchGiftRequested(),
  ]);
}

export default rootSaga;
