import reducersDic from "./../constants/reducersDic";

const initialState = {
  type: 'trending',
  loading: false,
  // error: null,
  // data: null,
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case reducersDic.FETCH_START:
      return {
        ...state,
        loading: true,
      }
    case reducersDic.FETCH_DATA:
      return {
        ...state,
        ...payload,
      }
    case reducersDic.FETCH_ERROR:
      return {
        ...state,
        ...payload,
      }
    case reducersDic.FETCH_END:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}