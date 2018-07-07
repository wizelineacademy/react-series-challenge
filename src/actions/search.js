const SEARCH_GET = 'SEARCH_GET'
const SEARCH_FETCHED = 'SEARCH_FETCHED'

const fetchedSearch = (payload) => ({ type: SEARCH_FETCHED, payload })
const getSearch = (payload) => ({ type: SEARCH_GET, payload })

export default {
    creators: {
        fetchedSearch,
        getSearch
    },
    types: {
        SEARCH_FETCHED,
        SEARCH_GET
    }
}