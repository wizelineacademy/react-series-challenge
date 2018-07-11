const FAVORITE_ADD = 'FAVORITE_ADD'
const FAVORITE_REMOVE = 'FAVORITE_REMOVE'
const FAVORITES_GET = 'FAVORITES_GET'
const FAVORITES_FETCHED = 'FAVORITES_FETCHED'
const FAVORITES_FAILED = 'FAVORITES_FAILED'
const FAVORITE_SEARCH = 'FAVORITE_SEARCH'
const FAVORITE_SEARCHED = 'FAVORITE_SEARCHED'

const addFavorite = payload => ({ type: FAVORITE_ADD, payload})
const removeFavorite = payload => ({ type: FAVORITE_REMOVE, payload})
const getFavorites = payload => ({ type: FAVORITES_GET, payload})
const fetchedFavorites = payload => ({ type: FAVORITES_FETCHED, payload})
const failedFavorites = payload => ({ type: FAVORITES_FAILED, payload})
const searchFavorite = payload => ({ type: FAVORITE_SEARCH, payload })
const searchedFavorite = payload => ({ type: FAVORITE_SEARCHED, payload })

export default {
    types: {
        FAVORITE_ADD,
        FAVORITE_REMOVE,
        FAVORITES_GET,
        FAVORITES_FETCHED,
        FAVORITES_FAILED,
        FAVORITE_SEARCH,
        FAVORITE_SEARCHED
    },
    creators: {
        addFavorite,
        removeFavorite,
        getFavorites,
        fetchedFavorites,
        failedFavorites,
        searchFavorite,
        searchedFavorite
    }
}
