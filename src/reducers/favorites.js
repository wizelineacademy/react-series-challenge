import favorites from '../actions/favorites'
const localStorage = window.localStorage
const items = JSON.parse(localStorage.getItem("favorites") || "[]");
const initialState = { items }
const { types: { FAVORITES_ADD, FAVORITES_REMOVE, FAVORITES_GET } } = favorites
const favoritesReducer = (state = initialState, action) => {
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