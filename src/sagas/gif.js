import { takeEvery, put, all, select } from "redux-saga/effects";
import gif from '../actions/gif'
import favorites from '../actions/favorites'

const { types: { GIF_CLICK } } = gif
const { creators: { addFavorite, removeFavorite } } = favorites


export function* watchGif() {
    yield all([
        takeEvery(GIF_CLICK, clickGif)
    ])
}

function* clickGif(action) {
    const { payload: gif, payload: { id } } = action
    const favorites = yield select((state) => state.favorites.items)
    const isFavorite = favorites.some(favorite => favorite.id === id);
    if (isFavorite) {
        yield put(removeFavorite(gif))
    } else {
        yield put(addFavorite(gif))
    }
}
