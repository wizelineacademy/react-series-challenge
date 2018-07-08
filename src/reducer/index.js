import { combineReducers } from 'redux'

// Reducer
import gif from './getAllTrendingGifs';
import searchGif from './searchGif';
import favorites from './favorites';

const rootReducer = combineReducers({
    gif,
    searchGif,
    favorites,
  })
  
export default rootReducer;