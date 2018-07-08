import { combineReducers } from 'redux';
import favGifs from './favGifs';
import searchGifs from './searchGifs';
import allGifs from './searchGifs';
​
export default combineReducers({
    favGifs,
    searchGifs,
    allGifs
})