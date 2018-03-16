import { combineReducers } from 'redux';
import trendingGiphyReducer from './trendingGiphysReducer';
import favoriteGiphysReducer from './favoriteGiphysReducer';
import giphyDetailReducer from './giphyDetailReducer';

export default combineReducers({
  trending: trendingGiphyReducer,
  favorites: favoriteGiphysReducer,
  detail: giphyDetailReducer,
});

