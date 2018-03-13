import { FAVORITE_CLICK } from '../actions'
import { updateFavoritesArray, getFavsFromStorage } from '../utils'

const initialState = {
  favorites:  getFavsFromStorage()
}

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_CLICK:
      const favorites = updateFavoritesArray(action.payload.id, state.favorites.slice())

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
