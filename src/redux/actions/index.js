import actions from "../constants/actions";

const fetchChange = (word = '') => {
  return {
    type: actions.FETCH_REQUEST,
    payload: {
      word
    }
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

const modifyLocal = (object) => {
  return {
    type: actions.LOCALSTORAGE_MODIFY,
    payload: {
      object
    }
  }
}

export default {
  fetchChange,
  modifyLocal,
  localFind,
}