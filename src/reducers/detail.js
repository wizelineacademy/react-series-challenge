import { DETAIL_FETCH_GIPH_SUCCESS, DETAIL_DELETE_GIPH } from '../actions'

const initialState = {
  giph: null
}

const detail = (state = initialState, action) => {
  switch (action.type) {
    case (DETAIL_DELETE_GIPH):
      return {
        ...state,
        giph: null
      }
    case (DETAIL_FETCH_GIPH_SUCCESS):
      return {
        ...state,
        giph: action.payload.giph
      }
    default:
      return {
        ...state
      }
  }
}

export default detail
