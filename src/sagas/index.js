import axios from 'axios';
import { call,takeEvery,put,all,select } from 'redux-saga/effects';
import searchActions from '../actions/search';
import cardsActions from '../actions/cards';

/*Search*/
const {
	SEARCH_CARDS,
	ERROR_SEARCH,
} = searchActions.types;
const {
	LOAD_CARDS,
	LOAD_TRENDING,
} = cardsActions.types;

function fetchSearchCards(term,limit=5) {
  return axios({
    method: "get",
    url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${term}&limit=${limit}&offset=0`
  });
}
const getTerm = state => state.search;
function* searchCards(){
	try{
		const search = yield select(getTerm);
		if( Object.keys(search).length === 0 || search.term == "" ) throw 'No search term';
		const response = yield call(fetchSearchCards,search.term);
		yield put({ type:LOAD_CARDS, payload: {cards:response.data} });
	}catch(e){
		yield put({ type:'ERROR_SEARCH', e });
	}
}
function* watchForSearch(){
	yield takeEvery(SEARCH_CARDS,searchCards);
}
/*Search end*/

/*Trending*/
function fetchTrendingCards(limit=5) {
  return axios({
    method: "get",
    url: `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_APIKEY}&limit=${limit}`
  });
}
function* trendingCards(){
	try{
		const response = yield call(fetchTrendingCards);
		yield put({ type:LOAD_CARDS, payload: {cards:response.data} });
	}catch(e){
		yield put({ type:'ERROR_SEARCH', e });
	}
}
function* watchForTrending(){
	yield takeEvery(LOAD_TRENDING,trendingCards);
}
/*Trending end*/

function* rootSaga(){
	yield all([
		watchForSearch(),
		watchForTrending()
		]);
}

export default rootSaga;