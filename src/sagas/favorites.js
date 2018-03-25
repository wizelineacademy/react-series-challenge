import { call, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { getTrendingList, searchGifs } from '../api/giphy';
import favoriteActions from '../actions/favorites';

export function* getFavoritesList() {
    const localFavs =  JSON.parse(localStorage.getItem('favList')) || [];
    yield put(favoriteActions.creators.getFavoritesListComplete(localFavs));
}

export function* addFavorite(fav) {
    const localFavs =  JSON.parse(localStorage.getItem('favList')) || [];
    localFavs.push(fav.payload);
    const newLocal = JSON.stringify(localFavs);
    localStorage.setItem('favList', newLocal);
    yield put(favoriteActions.creators.addFavoriteComplete(localFavs));
}

export function* removeFavorite(id) {
    const localFavs =  JSON.parse(localStorage.getItem('favList')) || [];
    let tgtIndex;
    localFavs.filter((fav, index) => {
        if(fav.id === id.payload){
            tgtIndex = index;
        }
        return fav;
    });
    localFavs.splice(tgtIndex, 1);
    const newLocal = JSON.stringify(localFavs);
    localStorage.setItem('favList', newLocal);
    yield put(favoriteActions.creators.removeFavoriteComplete(localFavs));
}

export default function* favoritesSaga() {
    yield takeEvery(favoriteActions.types.GET_FAVORITE_START, getFavoritesList);
    yield takeEvery(favoriteActions.types.ADD_FAVORITE_START, addFavorite);
    yield takeEvery(favoriteActions.types.REMOVE_FAVORITE_START, removeFavorite)
}