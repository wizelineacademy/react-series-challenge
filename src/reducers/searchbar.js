import { SEARCH_BAR_CHANGE } from '../actions'

const initialState = {
  value: ''
}

const searchBar = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BAR_CHANGE:
      return {
        ...state,
        value: action.payload.value
      }
    default:
      return state
  }
}

export default searchBar
