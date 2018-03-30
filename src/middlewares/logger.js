const logger = store => next => action => {
  console.group(action.type);
  console.log('previous state', store.getState());
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

export default logger;
