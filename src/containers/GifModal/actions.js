import { createAction } from 'redux-actions';

const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE = 'MODAL_CLOSE';
const GIF_SET = 'GIF_SET';

const openModal = createAction(MODAL_OPEN);
const closeModal = createAction(MODAL_CLOSE);
const setGif = createAction(GIF_SET);

export default {
  types: {
    MODAL_OPEN,
    MODAL_CLOSE,
    GIF_SET,
  },
  creators: {
    openModal,
    closeModal,
    setGif,
  },
};
