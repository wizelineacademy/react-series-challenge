import { combineReducers } from 'redux';
import searchBar from './searchBar';
import favsSearchBar from './favsSearchBar';
import gifList from './gifList';
import favorites from './favorites';

export default combineReducers({
    searchBar,
    gifList,
    favorites,
    favsSearchBar,
});