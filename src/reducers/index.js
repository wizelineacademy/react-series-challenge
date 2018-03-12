import { combineReducers } from 'redux'
import detail from './detail'
import home from './home'
import searchBar from './searchbar'

const rootReducer = combineReducers({
  detail,
  home,
  searchBar
})
export default rootReducer
