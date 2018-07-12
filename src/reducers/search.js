import { CHANGE_INPUT, CLEAR_INPUT } from '../actions/types';

const initialState = {
  inputString: '',
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_INPUT:
      const { value } = payload.target;
      return { inputString: value };
    case CLEAR_INPUT:
      return { inputString: '' };
    default:
      return state;
  }
}
