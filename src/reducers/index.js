import { combineReducers } from 'redux';
import searchBar from './searchBar';
import gifList from './gifList';

export default combineReducers({
    searchBar,
    gifList,
});