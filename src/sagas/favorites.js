import { takeEvery, call, put, select } from "redux-saga/effects";
import favorites from '../actions/favorites'

const favoritesSelector = (state) => state.favorites.items || []
const { types: { FAVORITE_CLICK }, creators: { removeFavorite, addFavorite } } = favorites

function* watchFavoriteClicked() {
    yield takeEvery(FAVORITE_CLICK, clickFavorite)
}

function* clickFavorite(favorite) {
    const favorites = yield select(favoritesSelector)
    const isInFavorites = favorites.some( fav => fav.id === favorite.id)
    if (isInFavorites) {
        yield put(removeFavorite(favorite))
    } else {
        yield put(addFavorite(favorite))
    }
}

export {
    watchFavoriteClicked
}

