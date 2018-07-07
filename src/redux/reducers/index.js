import initialState from "./../constants/initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CONFIG_CHECK':
      return {
        ...state,
        value: state.value + 1,
      }
    default:
      return state
  }
}