/* global localStorage */

import { takeEvery, call, put } from 'redux-saga/effects';

import favoriteGifs from '../actions/favoriteGifs';

const keyInStorage = 'favoriteGifs-SmPvJkHlBG3jrG7TOW9f';

const {
  FAVORITE_ADD,
  FAVORITE_REMOVE,
  FAVORITE_FETCH,
} = favoriteGifs.types;

const {
  addFavoriteToState,
  removeFavoriteFromState,
  hydrateFavorite,
} = favoriteGifs.creators;

const fetchGifsFromStorageOrDefault = () => {
  let allGifs = localStorage.getItem(keyInStorage);
  allGifs = !allGifs ? {} : JSON.parse(allGifs);
  return allGifs;
};

const saveGifsToStorage = (newFavoritGifs) => {
  localStorage.setItem(keyInStorage, JSON.stringify(newFavoritGifs));
};

function persistToLocalStorage({ gif }) {
  const allGifs = fetchGifsFromStorageOrDefault();
  const newFavoritGifs = { ...allGifs };
  newFavoritGifs[gif.id] = {
    embed_url: gif.embed_url,
    title: gif.title,
    id: gif.id,
    isFavorite: true,
  };
  saveGifsToStorage(newFavoritGifs);
}

function* saveNewGifToStorage(action) {
  const { payload } = action;
  yield call(persistToLocalStorage, payload);
  yield put(addFavoriteToState({ payload }));
}

function removeFromLocalStorage({ gif }) {
  const allGifs = fetchGifsFromStorageOrDefault();
  const newFavoritGifs = { ...allGifs };
  delete newFavoritGifs[gif.id];
  saveGifsToStorage(newFavoritGifs);
}

function* removeGifFromStorage(action) {
  const { payload } = action;
  yield call(removeFromLocalStorage, payload);
  yield put(removeFavoriteFromState({ payload }));
}

function* fetchGifsFromStorage() {
  const gifs = fetchGifsFromStorageOrDefault();
  yield put(hydrateFavorite({ payload: { gifs } }));
}

export default [
  takeEvery(FAVORITE_ADD, saveNewGifToStorage),
  takeEvery(FAVORITE_REMOVE, removeGifFromStorage),
  takeEvery(FAVORITE_FETCH, fetchGifsFromStorage),
];
