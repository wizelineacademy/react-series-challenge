import giftActions from '../actions/gifts';

const initialState = "hola";

const giftReducer = (state = initialState, action) => {
  const { type, payload } = action;
  

  switch (type) {
    case giftActions.types.GIFT_FETCHED: {
        const { newGift } = payload;

        const newState = newGift.text ;

      return newState;
    }

    default:
      return state;
  }
};

export default giftReducer;
