import { combineReducers } from 'redux';
import favGifs from './favGifs';
import searchGifs from './searchGifs';
import allGifs from './allGifs';

export default combineReducers({
    favGifs,
    allGifs,
    searchGifs
})