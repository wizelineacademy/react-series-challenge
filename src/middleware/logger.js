const logger = (store) => (next) => (action) => {
  const { type } = action;

  const stateBeforeReducers = store.getState();
  const nextMiddlewares = next(action);
  const stateAfterReducers = store.getState();

  return nextMiddlewares;
};

export default logger;
