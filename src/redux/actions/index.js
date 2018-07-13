import actions from "../constants/actions";

const fetchChange = (word = '') => {
  return {
    type: actions.FETCH_REQUEST,
    payload: {
      word
    }
  }
}

const fetchStart = () => {
  return {
    type: actions.FETCH_START
  };
}

const fetchData = (data = {}) => {
  return {
    type: actions.FETCH_DATA,
    payload: { data }
  }
}

const fetchError = (error = {}) => {
  return {
    type: actions.FETCH_ERROR,
    payload: { error }
  }
}

const fetchEnd = () => {
  return {
    type: actions.FETCH_END
  };
}


const localSetData = (data) => {
  return {
    type: actions.LOCALSTORAGE_DATA,
    payload: { data }
  }
}

const localFind = (filter = '') => {
  return {
    type: actions.LOCALSTORAGE_FIND,
    payload: {
      filter
    }
  }
}

const localModify = (object) => {
  return {
    type: actions.LOCALSTORAGE_MODIFY,
    payload: {
      object
    }
  }
}

export default {
  // Fetch
  fetchStart,
  fetchData,
  fetchChange,
  fetchError,
  fetchEnd,
  // Local
  localModify,
  localFind,
  localSetData,
}