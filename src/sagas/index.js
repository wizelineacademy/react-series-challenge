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
	ADD_FAVORITES,
	REMOVE_FAVORITES,
	ADD_REMOVE_FAVORITES,
	LOAD_FAVORITES,
	SET_FAVORITES,
} = cardsActions.types;

function fetchSearchCards(term,limit=5) {
  return axios({
    method: "get",
    url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${term}&limit=${limit}&offset=0`
  });
}
const getTermState = state => state.search;
function* searchCards(){
	try{
		const search = yield select(getTermState);
		if( Object.keys(search).length === 0 || search.term === "" ) throw 'No search term';
		const response = yield call(fetchSearchCards,search.term);
		yield put({ type:LOAD_CARDS, payload: {cards:response.data.data} });
	}catch(e){
		yield put({ type:ERROR_SEARCH, e });
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
		const favs = JSON.parse(localStorage.getItem('favoritesCards'));
		yield put({ type:SET_FAVORITES, payload: {cards:favs} });

		const response = yield call(fetchTrendingCards);
		yield put({ type:LOAD_CARDS, payload: {cards:response.data.data} });
	}catch(e){
		yield put({ type:'ERROR_SEARCH', e });
	}
}
function* watchForTrending(){
	yield takeEvery(LOAD_TRENDING,trendingCards);
}
/*Trending end*/

/*Favorites*/
const getCardsState = state => state.cards;

function* favCard(){
	const cards = yield select(getCardsState);
	console.log('cards',cards);
	if( cards.favorites[cards.card.id] ){
		yield put({ type: REMOVE_FAVORITES, payload: { card: cards.card } });
	}else{
		yield put({ type: ADD_FAVORITES, payload: { card: cards.card } });
	}
	const newCards = yield select(getCardsState);
	localStorage.setItem('favoritesCards',JSON.stringify(newCards.favorites));
}
function* watchForAddRemove(){
	yield takeEvery(ADD_REMOVE_FAVORITES,favCard);
}

function* loadFavCard(){
	const state = yield select();
	const favs = JSON.parse(localStorage.getItem('favoritesCards'));
	console.log('favs lodad',favs)
	const favsArr = Object.keys(favs).map((k) => favs[k])
	yield put({ type:LOAD_CARDS, payload: {cards:favsArr} });
	/*if( state.path === '/Favorites' ){
	}*/
}
function* watchForLoadFavs(){
	yield takeEvery(LOAD_FAVORITES,loadFavCard);
}
/*Favorites end*/

function* rootSaga(){
	yield all([
		watchForSearch(),
		watchForTrending(),
		watchForAddRemove(),
		watchForLoadFavs(),
	]);
}

export default rootSaga;