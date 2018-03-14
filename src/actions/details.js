const DETAILS_FETCH_REQ = 'DETAILS_FETCH_REQ'
const DETAILS_FETCH_START = 'DETAILS_FETCH_START'
const DETAILS_FETCH_SUCCESS = 'DETAILS_FETCH_SUCCESS'
const DETAILS_FETCH_FAIL = 'DETAILS_FETCH_FAIL'


const fetchDetails = data => ({
  type: DETAILS_FETCH_REQ,
  payload: data
})
const fetchDetailsStart = () => ({
  type: DETAILS_FETCH_START,
})
const fetchDetailsSuccess = data => ({
  type: DETAILS_FETCH_SUCCESS,
  payload: data
})
const fetchDetailsFail = data => ({
  type: DETAILS_FETCH_FAIL,
  payload: data
})

export default {
  types: {
    DETAILS_FETCH_REQ,
    DETAILS_FETCH_START,
    DETAILS_FETCH_SUCCESS,
    DETAILS_FETCH_FAIL
  },
  creators: {
    fetchDetails,
    fetchDetailsStart,
    fetchDetailsSuccess,
    fetchDetailsFail
  },
};