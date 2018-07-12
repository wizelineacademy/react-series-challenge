import * as actionTypes from '../actions'

const initialState = {
  gifs: [],
  load: false
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

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        gifs: action.gifs.data.data
      }
    default:
      return state;
  }
}

export default reducer