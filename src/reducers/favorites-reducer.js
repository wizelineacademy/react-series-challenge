import {ADDED_FAVORITE, DELETED_FAVORITE} from '../actions/types'

const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || {}

export default function(state=initialFavorites, action) {
  let newState
  switch(action.type){
    case ADDED_FAVORITE:
      newState = {...state, [action.payload.id]: action.payload}
      localStorage.setItem('favorites', JSON.stringify(newState))
      return newState
    case DELETED_FAVORITE:
      const oldState = state
      delete oldState[action.payload.id]
      newState = { ...oldState }
      localStorage.setItem('favorites', JSON.stringify(newState))
      return newState
    default:
      return state
  }
}