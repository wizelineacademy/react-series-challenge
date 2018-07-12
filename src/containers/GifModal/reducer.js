import actions from './actions';

const { MODAL_OPEN, MODAL_CLOSE, MODAL_GIF_SET } = actions.types;

const initialState = {
  isOpen: false,
  gif: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL_OPEN:
      return { ...state, isOpen: true };
    case MODAL_CLOSE:
      return { ...state, isOpen: false };
    case MODAL_GIF_SET:
      return { ...state, gif: payload.gif };
    default:
      return state;
  }
};

export default reducer;
