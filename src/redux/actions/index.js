import actions from "../constants/actions";

const fetchChange = (search = '') => {
  return {
    type: actions.FETCH_REQUEST,
    payload: {
      search
    }
  }
}

const showAlert = (text = '') => {
  return {
    type: actions.FECTH_CHANGE,
    payload: {
      text
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
  modifyLocal
}