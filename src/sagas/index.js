import { all } from "redux-saga/effects";

// Sagas
import watchGetAllTrendingGif from "./getAllTrendingGifs";

export default function* rootSaga() {
    yield all([
        watchGetAllTrendingGif(),
    ]);
} 