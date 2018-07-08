const CONTENT_START_LOADING = 'CONTENT_START_LOADING'
const CONTENT_FETCHED = 'CONTENT_FETCHED'
const CONTENT_FETCHED_ERROR = 'CONTENT_FETCHED_ERROR'
const CONTENT_ADD_FAV = 'CONTENT_ADD_FAV'
const CONTENT_REMOVE_FAV = 'CONTENT_REMOVE_FAV'

const startLoading = (payload = {}) => ({type: CONTENT_START_LOADING, payload})
const fetchedContent = (payload = {}) => ({type: CONTENT_FETCHED, payload})
const fetchedContentError = (payload = {}) => ({type: CONTENT_FETCHED_ERROR, payload})
const addToFavContent = (payload = {}) => ({type: CONTENT_ADD_FAV, payload})
const removeFavContent = (payload = {}) => ({type:CONTENT_REMOVE_FAV, payload})

export default {
  types: {
    CONTENT_START_LOADING,
    CONTENT_FETCHED,
    CONTENT_FETCHED_ERROR,
    CONTENT_ADD_FAV,
    CONTENT_REMOVE_FAV,
  },
  actions: {
    startLoading,
    fetchedContent,
    fetchedContentError,
    addToFavContent,
    removeFavContent,
  }
}
