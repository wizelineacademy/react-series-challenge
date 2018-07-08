import { createStore } from 'redux';
import rootReducer from '../reducers';
import logger from '../middlewares/logger';

const middlewares = [logger];

const appliedMiddleware = applyMiddleware(...middlewares);

const store = createStore(rootReducer, appliedMiddleware);

export default store;
