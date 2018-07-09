import search from '../actions/search'
import favorites from '../actions/favorites'

const { types: { FAVORITES_GET } } = favorites
const { types: { SEARCH_FETCHED } } = search

const favoritesSelector = (state) => state.favorites.items


const searchReducer = (state = { gifs: [] }, action) => {
    const { type, payload } = action
    
    switch(type) {
        case SEARCH_FETCHED: {
            return { ...state, gifs: payload }
        }
        case FAVORITES_GET: {
            console.log(payload)
            const gifs = payload.favorites.items;       
            return { ...state, gifs }
        }
        default: 
            return state
    }
}

export default searchReducer