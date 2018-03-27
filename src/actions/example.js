import { createAction } from 'redux-actions';

const TRANSACTION_ADD = 'TRANSACTION_ADD';
const TRANSACTION_REMOVE = 'TRANSACTION_REMOVE';

const addTransaction = (payload = {}) => ({ type: TRANSACTION_ADD, payload });
const removeTransaction = createAction(TRANSACTION_REMOVE);

export default {
  types: {
    TRANSACTION_ADD,
    TRANSACTION_REMOVE,
  },
  creators: {
    addTransaction,
    removeTransaction,
  },
};