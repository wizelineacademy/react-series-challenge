import GiftModalActions from '../actions/giftModal';

const initalState = {
  isModalOpen: false,
  gift: {},
};

const giftModalReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GiftModalActions.types.GIFT_MODAL_SHOW:
      const { gift } = payload;
      return { isModalOpen: true, gift: gift};

    case GiftModalActions.types.GIFT_MODAL_HIDE:
      return { isModalOpen: false, gift: {} };

    default:
      return state;
  }
};

export default giftModalReducer;
