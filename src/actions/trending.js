const TRENDING_GET = 'TRENDING_GET'

const getTrending = (payload) => ({ type: TRENDING_GET, payload })

export default {
    types: {
        TRENDING_GET
    },
    creators: {
        getTrending
    }
}