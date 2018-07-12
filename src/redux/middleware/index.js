// Custom Middleware - Logger
const loggerMiddleware = store => next => action => {
  const { type, payload } = action;
  let result = next(action);

  // TODO: uncomment
  console.group(type);
  if(payload) console.log(payload);
  console.log(store.getState());
  console.groupEnd();

  return result;
}

export default loggerMiddleware