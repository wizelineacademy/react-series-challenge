const SEARCH_GET = 'SEARCH_GET'
const SEARCH_FETCHED = 'SEARCH_FETCHED'
const SEARCH_FAILED = 'SEARCH_FAILED'

const getSearch = payload => ({ type: SEARCH_GET, payload })
const fetchedSearch = payload => ({ type: SEARCH_FETCHED, payload })
const failedSearch = payload => ({ type: SEARCH_FAILED, payload })

export default {
  types: {
    SEARCH_GET,
    SEARCH_FETCHED,
    SEARCH_FAILED
  },
  creators: {
    getSearch,
    fetchedSearch,
    failedSearch
  }
}
