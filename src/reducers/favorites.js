import favorites from '../actions/favorites'

const { types: { FAVORITE_ADD, FAVORITE_REMOVE, FAVORITES_FETCHED, FAVORITE_SEARCHED} } = favorites
const favoritesReducer = (state = { items: [], filter: '' }, action) => {
    const { type, payload } = action

    switch(type) {
        case FAVORITES_FETCHED: {
            return { ...state, items: [...payload] }
        }
        case FAVORITE_ADD: {
            return { ...state, items: [...state.items, { favorite: true, ...payload }]}
        }
        case FAVORITE_REMOVE: {
            const items = state.items.filter(favorite => favorite.id !== payload.id )
            return { ...state, items: [...items]}
        }
        case FAVORITE_SEARCHED: {
            return { ...state, filter: payload }
        }
        default: 
            return state
    }
}

export default favoritesReducer