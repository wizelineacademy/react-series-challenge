import actions from './actions';

const { closeModal } = actions.creators;

const dispatcher = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default dispatcher;
