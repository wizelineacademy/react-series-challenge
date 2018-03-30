import {combineReducers} from 'redux';

import {reducer as gifReducer, NAME as gifReducerName} from './gif';

const rootReducer = combineReducers({
  [gifReducerName]: gifReducer
});

export default rootReducer;
