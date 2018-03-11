const logger = store => next => action => {
  const { type } = action;

  const stateBeforeReducers = store.getState();
  const nextMiddlewares = next(action);
  const stateAfterReducers = store.getState();

  console.group(type); // eslint-disable-line 
  console.log(stateBeforeReducers); // eslint-disable-line 
  console.log(action); // eslint-disable-line 
  console.log(stateAfterReducers); // eslint-disable-line 
  console.groupEnd(); // eslint-disable-line 

  return nextMiddlewares;
};

export default logger;
