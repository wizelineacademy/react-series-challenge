import { createAction } from 'redux-actions';
import { CHANGE_INPUT, CLEAR_INPUT } from './types';

export const changeInput = createAction(CHANGE_INPUT);
export const clearInput = createAction(CLEAR_INPUT);

export default { changeInput, clearInput };