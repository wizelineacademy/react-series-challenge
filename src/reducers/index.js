import { combineReducers } from 'redux'
import home from "../Containers/HomePage/reducer"
import search from "../Containers/SearchPage/reducer"
import fav from "../Containers/FavPage/reducer"
export default combineReducers({
    home,
    search,
    fav
  })