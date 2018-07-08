import reducersDic from "./../constants/reducersDic";

const initialState = {
  likes: []
}

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case reducersDic.LOCALSTORAGE_DATA:
      return {
        ...state,
        ...data
      }
    default:
      return state
  }
}