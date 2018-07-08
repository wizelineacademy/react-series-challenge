import { combineReducers } from 'redux';
import searchBar from './searchBar';
import gifList from './gifList';
import favorites from './favorites';

export default combineReducers({
    searchBar,
    gifList,
    favorites,
});