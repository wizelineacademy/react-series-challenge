import { select } from 'redux-saga/effects';

export function* getPieceOfState(piece) {
  return yield select(state => state[piece]);
}

export default {
  getPieceOfState,
};
