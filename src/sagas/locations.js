import { takeEvery, call, put, select } from "redux-saga/effects";
import location from '../actions/location'
import favorites from '../actions/favorites'
import trending from '../actions/trending'

const { types: { LOCATION_GET } } = location
const { creators: { getFavorites } } = favorites
const { creators: { getTrending } } = trending

const FAVORITES_PATH = 'favorites'
const TRENDING_PATH = 'trending'

function* watchForLocation() {
    yield takeEvery(LOCATION_GET, getLocation)
}

function* getLocation(action) {
    const parsedURL = action.payload.pathname.substring(1);
    const state = yield select()
    if (parsedURL.includes(FAVORITES_PATH)) {
       
        yield put(getFavorites(state))
    }

    if (parsedURL.includes(TRENDING_PATH)) {
        yield put(getTrending(state))
    }
}

export {
    watchForLocation
} 