import trending from '../actions/trending'

const { types: { TRENDING_FAILED, TRENDING_FETCHED } } = trending
export default (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case TRENDING_FAILED: {
      return [...state]
    }
    case TRENDING_FETCHED: {
      return [...payload]
    }
    default:
      return state
  }
}
