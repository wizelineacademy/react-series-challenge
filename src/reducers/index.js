import { combineReducers } from 'redux'
import favorites from './favorite'
import detail from './detail'
import home from './home'
import searchBar from './searchbar'

const rootReducer = combineReducers({
  favorites,
  detail,
  home,
  searchBar
})
export default rootReducer
