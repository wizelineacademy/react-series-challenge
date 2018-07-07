import { combineReducers } from 'redux'
import search from './search'
import favorites from './favorites'

export default combineReducers({
    search,
    favorites
});