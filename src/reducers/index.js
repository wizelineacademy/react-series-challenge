import { combineReducers } from 'redux';
import trendingGiphyReducer from './trendingGiphysReducer';

export default combineReducers({
  trending: trendingGiphyReducer,
});

