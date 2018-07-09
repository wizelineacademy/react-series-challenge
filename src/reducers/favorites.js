import favorites from '../actions/favorites'

const { types: { FAVORITES_ADD, FAVORITES_REMOVE, FAVORITES_GET } } = favorites
const favoritesReducer = (state = { items: [] }, action) => {
    const { type, payload } = action

    switch(type) {
        case FAVORITES_ADD: {
            const items = [...state.items, payload]
            return { ...state, items }
        }
        case FAVORITES_REMOVE: {
            const items = state.items.filter(favorite => favorite.id !== payload.id )
            return { ...state, items }
        }
        default: 
            return state
    }
}

export default favoritesReducer