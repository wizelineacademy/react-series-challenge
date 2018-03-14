import { HOME_FETCH_INITIAL_GIPHS_SUCCESS, HOME_FETCH_SEARCH_GIPHS_SUCCESS } from '../actions'

const initialState = {
  giphies: []
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case (HOME_FETCH_INITIAL_GIPHS_SUCCESS):
    case (HOME_FETCH_SEARCH_GIPHS_SUCCESS):
      return {
        ...state,
        giphies: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default home
