import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import giftModalActions from '../../redux/actions/giftModal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight:'-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const AddGiftModal = (props) => {
  const {
    isModalOpen,
    gift,
    hideGiftModal,
  } = props;

  const {
      url, 
      name,
  } = gift 

  return (
    <Modal
      isOpen={isModalOpen}
      style={customStyles}
    >
      <div>
        <span>{name}</span>
        <img src={url} width={"100px"} height={"100px"} />
      </div>
      <button onClick={() => hideGiftModal()}>
        Close
      </button>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  const { isModalOpen, gift } = state.isModalOpen;

  return {
    isModalOpen,
    gift,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { hideGiftModal } = giftModalActions.creators;

  return bindActionCreators({
    hideGiftModal,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGiftModal);
