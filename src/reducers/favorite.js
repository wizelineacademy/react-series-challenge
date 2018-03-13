import { FAVORITE_CLICK } from '../actions'

const initialState = {
  favorites: []
}

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_CLICK:
      const favorites = state.favorites.slice()
      const newFavorite = action.payload.id
      const index = favorites.indexOf(newFavorite)
      if (index > -1) {
        favorites.splice(index, 1)
      } else {
        favorites.push(newFavorite)
      }
      return {
        ...state,
        favorites
      }
    default:
      return {
        ...state
      }
  }
}

export default favorite
