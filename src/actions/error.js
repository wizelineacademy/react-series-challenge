import { createAction } from 'redux-actions';
import { ERROR_STATUS } from './types';

export const errorStatus = createAction(ERROR_STATUS);

export default { errorStatus };
