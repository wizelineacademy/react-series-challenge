const counter = (state = 0, action) => {
  switch(action.type) {
     case 'INCREMENT':
       return state = state + action.payload.amount;
     case 'DECREMENT':
      return state = state - 1;
    case 'FETCH_SUCCEEDED':
      return state = 100;
    case 'FETCH_FAILED':
      return state = -200;
     default:
       return state;
   }
};
export default counter
