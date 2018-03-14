import { FAVORITE_CLICK, FAVORITE_FETCH_INITIAL_GIFS_SUCCESS, FAVORITE_SEARCH_KEYWORD } from '../actions'
import { updateFavoritesArray, getFavsFromStorage } from '../utils'

const initialState = {
  favorites:  getFavsFromStorage(),
  giphies: [],
  keyword: ''
}

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_SEARCH_KEYWORD:
      return {
        ...state,
        keyword: action.payload.keyword
      }
    case FAVORITE_FETCH_INITIAL_GIFS_SUCCESS:
      return {
        ...state,
        giphies: action.payload
      }
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
