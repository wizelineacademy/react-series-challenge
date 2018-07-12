import actions from "./../constants/actions";

export const initialState = {
  loading: false,
  word: '',
  data: {},
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_START:
      return {
        ...state,
        loading: true,
      }
    case actions.FETCH_DATA:
      return {
        ...state,
        ...payload,
      }
    case actions.FETCH_ERROR:
      return {
        ...state,
        ...payload,
      }
    case actions.FETCH_END:
      return {
        ...state,
        loading: false,
      }
    case actions.FETCH_REQUEST: {
      return {
        ...state,
        word: payload.word,
      }
    }
    default:
      return state
  }
}