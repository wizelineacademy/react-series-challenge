const logger = (store) => (next) => (action) => {
  const { type } = action;

  const stateBeforeReducers = store.getState();
  const nextMiddlewares = next(action);
  const stateAfterReducers = store.getState();

  console.group(type);
  console.log(stateBeforeReducers);
  console.log(action);
  console.log(stateAfterReducers);
  console.groupEnd();

  return nextMiddlewares;
};

export default logger;
