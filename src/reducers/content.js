import contentActions from '../actions/content'

const initialState = {}
const { types } = contentActions

const contentReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case types.CONTENT_START_LOADING:{
      return {...state, loading: true}
    }
    case types.CONTENT_FETCHED: {
      return {...state, content: payload, loading:false}
    }
    case types.CONTENT_FETCHED_ERROR: {
      return {...state, loading:false}
    }
    default:
      return state
  }
}

export default contentReducer
