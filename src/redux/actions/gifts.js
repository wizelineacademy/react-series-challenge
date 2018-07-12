import { createAction } from 'redux-actions';

const GIFT_FETCHED = 'GIFT_FETCHED';
const GET_GIFT = 'GET_GIFT';

const giftFetched = createAction(GIFT_FETCHED);
const getGift = createAction(GET_GIFT);

export default {
  types: {
    GIFT_FETCHED,
    GET_GIFT,
  },
  creators: {
    giftFetched,
    getGift,
  },
};
