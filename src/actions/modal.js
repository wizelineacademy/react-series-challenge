
const MODAL_SHOW = 'MODAL_SHOW';
const MODAL_HIDE = 'MODAL_HIDE';

const showModal = (payload = {}) => ({ type: MODAL_SHOW, payload });
const hideModal = () => ({
  type: MODAL_HIDE,
});

export default {
  types: {
    MODAL_SHOW,
    MODAL_HIDE,
  },
  creators: {
    showModal,
    hideModal,
  },
};
