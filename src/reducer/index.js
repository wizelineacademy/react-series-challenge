import { combineReducers } from 'redux'

// Reducer
import gif from './getAllTrendingGifs';
import searchGif from './searchGif';

const rootReducer = combineReducers({
    gif,
    searchGif,
  })
  
export default rootReducer;