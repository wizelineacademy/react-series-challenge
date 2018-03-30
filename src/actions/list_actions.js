import { createAction } from 'redux-actions';
import { SET_LIST } from './types';

export const setList = createAction(SET_LIST);

export default { setList };
