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

const addLike = (type, search = '') => {
  return {
    type: actions.LOCALSTORAGE_DATA,
    payload: {
      type,
      search
    }
  }
}

export default {
  fetchChange,
  addLike
}