import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import giftModalActions from '../../redux/actions/giftModal';
import favoriteActions from '../../redux/actions/favorites';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
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
        <header>{name}</header>
        <img src={url} width={"95%"} alt={""}/>
      </div>
      <button onClick={() => hideGiftModal()}>
        Close
      </button>
      <button onClick={isFavorite ? ()=>deleteFavorite(gift): ()=>addFavorite(gift)}>Like</button>
      <span>{isFavorite ? "Favorite" : ""}</span>
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
