import { select } from 'redux-saga/effects';

export function* getPieceOfState (piece) {
  return yield select((state) => state[piece]);
};

export function* getCurrentPage () {
  return yield select(({ paginator }) => paginator.currentPage);
};

export function* getFavorites () {
  return yield select(({ favorites }) => favorites.favorites);
}

export default {
  getPieceOfState,
  getCurrentPage,
  getFavorites
}