import * as actionTypes from '../actions'

const initialState = {
  gifs: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FAVORITE_TOGGLE:
      return state

    case actionTypes.FAVORITE_GIFS_DATA:
      return {
        ...state,
        gifs: action.gifs
      }

    default:
      return state;
  }
}

export default reducer