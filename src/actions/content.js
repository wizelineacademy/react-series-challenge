const CONTENT_START_LOADING = 'CONTENT_START_LOADING'
const CONTENT_FETCHED = 'CONTENT_FETCHED'
const CONTENT_FETCHED_ERROR = 'CONTENT_FETCHED_ERROR'

const startLoading = (payload = {}) => ({type: CONTENT_START_LOADING, payload})
const fetchedContent = (payload = {}) => ({type: CONTENT_FETCHED, payload})
const fetchedContentError = (payload = {}) => ({type: CONTENT_FETCHED_ERROR, payload})

export default {
  types: {
    CONTENT_START_LOADING,
    CONTENT_FETCHED,
    CONTENT_FETCHED_ERROR,
  },
  actions: {
    startLoading,
    fetchedContent,
    fetchedContentError,
  }
}
