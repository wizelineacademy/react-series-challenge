import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import giftModalActions from '../../redux/actions/giftModal';
import favoriteActions from '../../redux/actions/favorites';
import { ModalHeader, ModalImage, ModalButtons, InfoContainer } from '../../styled_component/Modal.styled';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    width: '210px',
    height: 'auto',
    overflow: 'auto',
    padding: '0',

    transform: 'translate(-50%, -50%)'
  }
};

const checkFavorite = (props) =>{
    const {
        gift,
        favorites
    } = props;

    return Object.keys(favorites).includes(gift.name);
}

const AddGiftModal = (props) => {
  const {
    isModalOpen,
    gift,
    hideGiftModal,
    addFavorite,
    deleteFavorite,
    favorites,
  } = props;

  const {
      url, 
      name
  } = gift 

  const isFavorite = checkFavorite({favorites,gift});

  return (
    <Modal
      isOpen={isModalOpen}
      style={customStyles}>
      <ModalImage src={url} alt={""}/>
      <InfoContainer>
        <ModalHeader>{name}</ModalHeader>
        <ModalButtons onClick={() => hideGiftModal()}>Close</ModalButtons>
        <ModalButtons className={isFavorite ? "favorite":""} onClick={isFavorite ? ()=>deleteFavorite(gift): ()=>addFavorite(gift)}>Like</ModalButtons>
      </InfoContainer>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  const { isModalOpen, gift } = state.isModalOpen;
  const { favorites, } = state.favoritesReducer;

  return {
    isModalOpen,
    gift,
    favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { hideGiftModal } = giftModalActions.creators;
  const { addFavorite, deleteFavorite  } = favoriteActions.creators;

  return bindActionCreators({
    hideGiftModal,
    addFavorite,
    deleteFavorite,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGiftModal);
