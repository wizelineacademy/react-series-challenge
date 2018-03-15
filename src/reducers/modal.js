import modalActions from '../actions/modal';

const initalState = {
  isModalOpen: false,
  selectedGiphy: {}
};

const ModalReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case modalActions.types.MODAL_SHOW:
      return { isModalOpen: true , selectedGiphy: payload };

    case modalActions.types.MODAL_HIDE:
      return { isModalOpen: false, selectedGiphy: {} };

    default:
      return state;
  }
};

export default ModalReducer;
