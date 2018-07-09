import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import giftModalActions from '../../redux/actions/giftModal';
import favoriteActions from '../../redux/actions/favorites';
import './Modal.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '210px',
    height: '310px',
    overflow: 'hidden',

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
      style={customStyles}
    >
      <div>
        <header className="modal-header">{name}</header>
        <img className="modal-image" src={url} alt={""}/>
      </div>
      <button className="modal-button" onClick={() => hideGiftModal()}>Close</button>
      <button className={`modal-button ${isFavorite ? "favorite":""}`} onClick={isFavorite ? ()=>deleteFavorite(gift): ()=>addFavorite(gift)}>Like</button>
      <span>{}</span>
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
