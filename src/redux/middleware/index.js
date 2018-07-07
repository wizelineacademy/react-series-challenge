// Custom Middleware - Logger
const loggerMiddleware = store => next => action => {
  const { type, payload } = action;
  let result = next(action);

  console.group(type);
  console.log(payload);
  console.log(store.getState());
  console.groupEnd();
  return result;
}

export default loggerMiddleware