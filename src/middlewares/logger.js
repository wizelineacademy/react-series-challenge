const logger = store => next => action => {
  console.group(action.type);
  console.log('prev state', store.getState());
  let result = next(action);
  console.log('action', action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
