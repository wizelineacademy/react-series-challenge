import { combineReducers } from 'redux'
import searchBar from './searchbar'
import home from './home'

const rootReducer = combineReducers({
  home,
  searchBar
})
export default rootReducer
