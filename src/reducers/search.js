import searchActions from '../actions/search';

const initalState = {
  q: '',
  results: '',
  isLoading: false
};

const searchReducer = (state = initalState, action) => {
  const { type } = action;

  switch (type) {
    case transactionModalActions.types.TRANSACTION_MODAL_SHOW:
      return { isModalOpen: true };

    case transactionModalActions.types.TRANSACTION_MODAL_HIDE:
      return { isModalOpen: false };

    default:
      return state;
  }
};

export default searchReducer;