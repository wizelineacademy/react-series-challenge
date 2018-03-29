import { takeEvery, put, select } from 'redux-saga/effects';
import favoriteActions from '../actions/favorites';
import Utils from '../utils/Utils';
import selectors from '../selectors';

export function* getFavoritesList() {
    const localFavs = JSON.parse(localStorage.getItem('favList')) || [];
    yield put(favoriteActions.creators.getFavoritesListComplete(localFavs));
}

export function* addFavorite(fav) {
    const localFavs = JSON.parse(localStorage.getItem('favList')) || [];
    localFavs.push(fav.payload);
    const newLocal = JSON.stringify(localFavs);
    localStorage.setItem('favList', newLocal);
    yield put(favoriteActions.creators.addFavoriteComplete(localFavs));
}

export function* removeFavorite(id) {
    const localFavs = JSON.parse(localStorage.getItem('favList')) || [];
    let tgtIndex;
    localFavs.filter((fav, index) => {
        if (fav.id === id.payload) {
            tgtIndex = index;
        }
        return fav;
    });
    localFavs.splice(tgtIndex, 1);
    const newLocal = JSON.stringify(localFavs);
    localStorage.setItem('favList', newLocal);
    yield put(favoriteActions.creators.removeFavoriteComplete(localFavs));
}
//const emptyString = (str) => !/^\s*$/.test(str)
export function* filterFavorites(query) {
    const state = yield select(selectors.favorites);
    let favFilterList = state.originalList.data;
    let filteredList = [];
    if (query.payload) {
        const input = Utils.slugfiy(query.payload);
        for (let i = 0, len = favFilterList.length; i < len; i++) {
            if (favFilterList[i].slug.includes(input)) {
                filteredList.push(favFilterList[i]);
            }
        }
    } else {
        filteredList = favFilterList;
    }
    yield put(favoriteActions.creators.filterFavoriteComplete({
        data: filteredList,
        query: query.payload
    }));
}

export default function* favoritesSaga() {
    yield takeEvery(favoriteActions.types.GET_FAVORITE_START, getFavoritesList);
    yield takeEvery(favoriteActions.types.ADD_FAVORITE_START, addFavorite);
    yield takeEvery(favoriteActions.types.REMOVE_FAVORITE_START, removeFavorite);
    yield takeEvery(favoriteActions.types.FILTER_FAVORITE_START, filterFavorites);
}