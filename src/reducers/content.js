import contentActions from '../actions/content'

const initialState = {
  favorites: {},
}
const { types } = contentActions

const contentReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case types.CONTENT_START_LOADING:{
      return {...state, loading: true}
    }
    case types.CONTENT_FETCHED: {
      return {...state, data: payload, loading:false}
    }
    case types.CONTENT_FETCHED_ERROR: {
      return {...state, loading:false}
    }
    case types.CONTENT_ADD_FAV: {
      const newState = {...state}
      newState.favorites[payload.id] = payload
      return newState
    }
    case types.CONTENT_REMOVE_FAV: {
      const newState = {...state}
      delete newState.favorites[payload.id]
      console.log('newState', newState)
      return newState
    }
    default:
      return state
  }
}

export default contentReducer
