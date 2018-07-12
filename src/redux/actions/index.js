import actions from "../constants/actions";

const fetchChange = (word = '') => {
  return {
    type: actions.FETCH_REQUEST,
    payload: {
      word
    }
  }
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

const modifyLocal = (object) => {
  return {
    type: actions.LOCALSTORAGE_MODIFY,
    payload: {
      object
    }
  }
}

const fetchStart = () => {
  return { type: actions.FETCH_START };
}

export default {
  fetchChange,
  modifyLocal,
  localFind,
  localSetData,
  fetchStart,
}