import { combineReducers } from 'redux'
import home from "./Containers/HomePage/reducer"
import search from "./Containers/SearchPage/reducer"
export default combineReducers({
    home,
    search
  })