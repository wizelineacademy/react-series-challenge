import { createAction } from 'redux-actions';
import { SET_CURRENT_LIST } from './types';

const setList = createAction(SET_CURRENT_LIST);

export default { setList };