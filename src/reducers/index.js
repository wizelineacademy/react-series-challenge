import { combineReducers } from 'redux';

import gifsFetch from './gifs';
import user from './user';

export default combineReducers({
	gifsFetch,
	user
});
