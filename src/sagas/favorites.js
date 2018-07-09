import { takeEvery, call, put, select } from "redux-saga/effects";
import favorites from '../actions/favorites'

const favoritesSelector = (state) => state.favorites.items || []
const { types: { FAVORITE_CLICK, FAVORITES_GET }, creators: { removeFavorite, addFavorite } } = favorites

function* watchFavoriteClicked() {
    yield takeEvery(FAVORITE_CLICK, clickFavorite)
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

export {
    watchFavoriteClicked
}

