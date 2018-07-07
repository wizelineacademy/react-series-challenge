const FAVORITES_ADD = 'FAVORITES_ADD'
const FAVORITES_REMOVE = 'FAVORITES_REMOVE'
const FAVORITE_CLICK = 'FAVORITE_CLICK'

const addFavorite = (payload) => ({ type: FAVORITES_ADD, payload })
const removeFavorite = (payload) => ({ type: FAVORITES_REMOVE, payload })
const clickFavorite = (payload) => ({ type: FAVORITE_CLICK, payload })


export default {
    creators: {
        addFavorite,
        removeFavorite,
        clickFavorite
    },
    types: {
        FAVORITES_ADD,
        FAVORITES_REMOVE,
        FAVORITE_CLICK
    }
}