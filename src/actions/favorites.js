const FAVORITES_ADD = 'FAVORITES_ADD'
const FAVORITES_REMOVE = 'FAVORITES_REMOVE'
const FAVORITE_CLICK = 'FAVORITE_CLICK'
const FAVORITES_GET = 'FAVORITES_GET'

const addFavorite = (payload) => ({ type: FAVORITES_ADD, payload })
const removeFavorite = (payload) => ({ type: FAVORITES_REMOVE, payload })
const clickFavorite = (payload) => ({ type: FAVORITE_CLICK, payload })
const getFavorites = (payload) => ({ type: FAVORITES_GET, payload })


export default {
    creators: {
        addFavorite,
        removeFavorite,
        clickFavorite,
        getFavorites
    },
    types: {
        FAVORITES_ADD,
        FAVORITES_REMOVE,
        FAVORITE_CLICK,
        FAVORITES_GET
    }
}