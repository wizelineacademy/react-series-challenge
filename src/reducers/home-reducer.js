import {FETCHED_TREND} from '../actions/types'

export default function(state={}, action) {
  switch(action.type){
    case FETCHED_TREND:
      return {...state, 'giphys': [...action.payload] }
    default:
      return state
  }
}