const logger = store => next => action => {
  let result = next(action);
  console.group(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
