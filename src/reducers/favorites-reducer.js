import {ADDED_FAVORITE, DELETED_FAVORITE} from '../actions/types'

export default function(state={}, action) {
  switch(action.type){
    case ADDED_FAVORITE:
      return {...state, [action.payload.id]: action.payload}
    case DELETED_FAVORITE:
      const oldState = state
      delete oldState[action.payload.id]
      return { ...oldState }
    default:
      return state
  }
}