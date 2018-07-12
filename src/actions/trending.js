const TRENDING_GET = 'TRENDING_GET'
const TRENDING_FETCHED = 'TRENDING_FETCHED'
const TRENDING_FAILED = 'TRENDING_FAILED'

const getTrending = payload => ({ type: TRENDING_GET, payload })
const fetchedTrending = payload => ({ type: TRENDING_FETCHED, payload })
const failedTrending = payload => ({ type: TRENDING_FAILED, payload })

export default {
    types: {
        TRENDING_GET,
        TRENDING_FETCHED,
        TRENDING_FAILED
    },
    creators: {
        getTrending,
        fetchedTrending,
        failedTrending
    }
}