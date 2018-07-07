import giftActions from '../actions/gifts';

const initialState = null;

const giftReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case giftActions.types.GIFT_FETCHED: {
        const { data } = payload;
        const newState = data; 

        return newState;
    }

    default:
      return state;
  }
};

export default giftReducer;
