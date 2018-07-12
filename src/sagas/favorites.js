import { takeEvery, all, take, select, put, call, takeLatest } from "redux-saga/effects";
import { delay } from 'redux-saga'
import favorites from '../actions/favorites'

const localStorage = window.localStorage
const { types: { FAVORITE_ADD, FAVORITE_REMOVE, FAVORITES_GET, FAVORITE_SEARCH }, creators: { fetchedFavorites, searchedFavorite } } = favorites

export function* watchFavorites() {
    yield all([
        getFavorites(),
        takeEvery(FAVORITE_ADD, favoriteAddedOrRemoved),
        takeEvery(FAVORITE_REMOVE, favoriteAddedOrRemoved),
        takeLatest(FAVORITE_SEARCH, handleSearch)
    ])
}

function* getFavorites() {
    yield take(FAVORITES_GET)
    const JSONfavorites = localStorage.getItem('favorites') || "[]";
    const favorites = JSON.parse(JSONfavorites)
    yield put(fetchedFavorites(favorites))
}

function* favoriteAddedOrRemoved(action) {
    const favorites = yield select(state => state.favorites.items)
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function* handleSearch(action) {
    yield call(delay, 500)
    yield put(searchedFavorite(action.payload))
}


