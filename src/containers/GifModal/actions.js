import { createAction } from 'redux-actions';

const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE = 'MODAL_CLOSE';
const MODAL_GIF_SET = 'MODAL_GIF_SET';

const openModal = createAction(MODAL_OPEN);
const closeModal = createAction(MODAL_CLOSE);
const setModalGif = createAction(MODAL_GIF_SET);

export default {
  types: {
    MODAL_OPEN,
    MODAL_CLOSE,
    MODAL_GIF_SET,
  },
  creators: {
    openModal,
    closeModal,
    setModalGif,
  },
};
