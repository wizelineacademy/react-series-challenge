const logger = (store) => ((next) => ((action) => {
  const { type } = action;

  const currentState = store.getState();
  const continueAction = next(action);
  const nextState = store.getState();

  console.group(type);
  console.log(currentState);
  console.log(action);
  console.log(nextState);
  console.groupEnd();

  return continueAction;
}));

export default logger;