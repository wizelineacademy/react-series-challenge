import { createAction } from 'redux-actions';
import { SET_ITEMSLIST } from './types';

export const setItemsList = createAction(SET_ITEMSLIST);

export default { setItemsList };
