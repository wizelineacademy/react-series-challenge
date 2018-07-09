const TRENDING_GET = 'TRENDING_GET'
const TRENDING_FETCHED = 'TRENDING_FETCHED'

const getTrending = (payload) => ({ type: TRENDING_GET, payload })
const fetchedTrending = (payload) => ({ type: TRENDING_FETCHED, payload })

export default {
    types: {
        TRENDING_GET,
        TRENDING_FETCHED
    },
    creators: {
        getTrending,
        fetchedTrending
    }
}