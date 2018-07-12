import reducer from '../../../redux/reducers/giftModal';
import GiftModalActions from '../../../redux/actions/giftModal';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        isModalOpen: false,
        gift: {},
      });
  });

  it('should handle GIFT_MODAL_SHOW', () => {
    const showAction = {
      type: GiftModalActions.types.GIFT_MODAL_SHOW,
      payload: {"gift":"cdcd"}
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, showAction)).toEqual({ isModalOpen: true, gift: "cdcd"});
  });

  it('should handle GIFT_MODAL_HIDE', () => {
    const hideAction = {
      type: GiftModalActions.types.GIFT_MODAL_HIDE,
    };
    expect(reducer({}, hideAction)).toEqual({ isModalOpen: false, gift: {}});
  });
});