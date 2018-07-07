import { combineReducers } from 'redux';
import homeReducer from './containers/Home/reducer';

export default combineReducers({
  home: homeReducer,
});
