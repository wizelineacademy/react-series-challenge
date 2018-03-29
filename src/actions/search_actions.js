import { createAction } from 'redux-actions';
import { CHANGE_INPUT } from './types';

export const changeInput = createAction(CHANGE_INPUT);

export default { changeInput };