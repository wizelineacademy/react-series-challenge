import { createAction } from 'redux-actions';

const GIFT_MODAL_SHOW = 'GIFT_MODAL_SHOW';
const GIFT_MODAL_HIDE = 'GIFT_MODAL_HIDE';

const showGiftModal = createAction(GIFT_MODAL_SHOW);
const hideGiftModal = createAction(GIFT_MODAL_HIDE);

export default {
  types: {
    GIFT_MODAL_SHOW,
    GIFT_MODAL_HIDE,
  },
  creators: {
    showGiftModal,
    hideGiftModal,
  },
};
