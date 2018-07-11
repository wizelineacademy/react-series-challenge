import * as actionTypes from '../actions'

const initialState = {
  gifs: JSON.parse(localStorage.getItem('favoriteGifs')) || []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FAVORITE_TOGGLE:
      const { item } = action
      let newState = {
        ...state,
        gifs: [
          ...state.gifs
        ]
      }

      const checkIndex = newState.gifs.findIndex(gif => gif.id === item.id)

      if ( checkIndex > -1 ) {
        newState.gifs = newState.gifs.filter(gif => gif.id !== item.id)
      } else {
        newState.gifs = newState.gifs.concat(item)
      }

      localStorage.setItem('favoriteGifs', JSON.stringify(newState.gifs))

      return newState

    case actionTypes.FETCH_FAVORITE_GIFS:
      return {
        ...state,
        gifs: action.gifs
      }

    default:
      return state;
  }
}

export default reducer