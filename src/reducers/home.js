import { HOME_FETCH_INITIAL_GIPHS_SUCESS } from '../actions'

const initialState = {
  giphies: []
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case(HOME_FETCH_INITIAL_GIPHS_SUCESS):
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
