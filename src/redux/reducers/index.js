import initialState from "./../constants/initialState";
import reducersDic from "./../constants/reducersDic";

export default (state = initialState, action) => {
  const { type, data } = action;

  console.log(data);

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