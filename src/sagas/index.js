import { all, takeEvery, take, call, put } from "redux-saga/effects";
import axios from "axios";
import trendingGifsActions from "../actions/trendingGifs";

const { FETCH_TRENDING_GIFS, GET_TRENDING_GIFS } = trendingGifsActions.types;

const { fetchTrendingGifs } = trendingGifsActions.creators;

const fetchGifs = () => {
  return axios
    .get(
      "http://api.giphy.com/v1/gifs/trending?api_key=NYBl3G1fuM3PcJWfeAv0wSS6fuHAJhIK"
    )
    .then(response => response);
};

function* getTrendingGifs() {
  try {
    const { data } = yield call(fetchGifs);
    const gifs = data.data;
    yield put(fetchTrendingGifs({ gifs }));
  } catch (e) {
    console.log(e);
  }
}

function* watchTrendingGifsRequested() {
  yield takeEvery(GET_TRENDING_GIFS, getTrendingGifs);
}

function* rootSaga() {
  yield all([watchTrendingGifsRequested()]);
}

export default rootSaga;

// import axios from 'axios';

// const fetchPrice = () => {
//   return axios.get(`${API_URL}/prices`)
//     .then((response) => response);
// };

// function* getCryptoPices() {
//     try {
//         const { data } = yield call(fetchPrice );
//         yield put(fetchedCryptoPrices({prices: data.prices}));
//     }catch(e) {
//        console.log(e);
//     }
// }

// function* watchCryptoPricesRequested() {
//     yield takeEvery(CRYPTO_PRICES_GET, getCryptoPices);
// }

// function* rootSaga() {
//     yield watchCryptoPricesRequested();
// }

// export default rootSaga;
