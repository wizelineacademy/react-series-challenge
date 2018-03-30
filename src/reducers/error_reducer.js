import { ERROR_STATUS } from '../actions/types';

const initialState = {
  err: false,
  info: {}
};

export default function (state = initialState, { type, payload }) {
  switch(type){
    case ERROR_STATUS:
      const newState = { ...payload };
      return newState;
    default:
      return state;
  }
}