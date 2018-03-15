import {FETCHED_TREND, FETCHED_DETAILS, SEARCHED_ON_WEB} from '../actions/types'

const defaultState = {
  giphys: [],
  details: {}
}

export default function(state=defaultState, action) {
  switch(action.type){
    case FETCHED_TREND:
      return {...state, 'giphys': [...action.payload] }
    case FETCHED_DETAILS:
      return {...state, 'details': action.payload }
    case SEARCHED_ON_WEB:
      return {...state, 'giphys': [...action.payload]}
    default:
      return state
  }
}