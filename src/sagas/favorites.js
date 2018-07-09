import { takeEvery, all, put, select } from "redux-saga/effects";
import favorites from '../actions/favorites'

const localStorage = window.localStorage
const favoritesSelector = (state) => state.favorites.items || []
const { types: { FAVORITE_CLICK, FAVORITES_ADD, FAVORITES_REMOVE }, creators: { removeFavorite, addFavorite } } = favorites

function* watchFavoriteClicked() {
    yield takeEvery(FAVORITE_CLICK, clickFavorite)
}
function* watchFavoritesChanged() {
    yield all([
        takeEvery(FAVORITES_REMOVE, saveToLocalStorage),
        takeEvery(FAVORITES_ADD, saveToLocalStorage)
    ])
}
function* clickFavorite(action) {
    const favorites = yield select(favoritesSelector)
    const isInFavorites = favorites.some( fav => fav.id === action.payload.id)
    if (isInFavorites) {
        yield put(removeFavorite(action.payload))
    } else {
        yield put(addFavorite(action.payload))
    }
}

function* saveToLocalStorage(action) {
    const favorites = yield select(favoritesSelector)
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export {
    watchFavoriteClicked,
    watchFavoritesChanged
}

