import { createAction } from 'redux-actions';
import { GO_TO_PAGE, SET_PAGINATOR } from './types';

export const goToPage = createAction(GO_TO_PAGE);
export const setPaginator = createAction(SET_PAGINATOR);

export default { goToPage, setPaginator };