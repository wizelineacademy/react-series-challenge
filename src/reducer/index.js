import { combineReducers } from 'redux'

// Reducer
import gif from './getAllTrendingGifs';
import searchGif from './searchGif';
import favorites from './favorites';
import GifFilter from './GifFilter';

const rootReducer = combineReducers({
    gif,
    searchGif,
    favorites,
    GifFilter,
  })
  
export default rootReducer;