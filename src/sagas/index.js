import { all } from 'redux-saga/effects';

import trendingGifs from './trendingGifs';
import favoriteGifs from './favoriteGifs';

export default function* () {
  yield all([
    ...trendingGifs,
    ...favoriteGifs,
  ]);
}

