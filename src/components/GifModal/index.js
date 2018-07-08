import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GifModalBox = styled.div`
  height: 420px;
  width: 420px;
  margin: 0 auto;
  background: white;
  border-radius: 3px;
  position: fixed;
  z-index: 999;
  top: 40px;
  padding: 20px;
  text-align: center;
  left: 0;
  right: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const GifModalContent = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

const GifImg = styled.img`
  max-width: 85%;
  max-height: 85%;
`;

const GifPortal = ({ children }) => {
  const nodeToAppend = document.getElementsByTagName('body')[0];
  return createPortal(children, nodeToAppend);
};

const GifModal = ({ isOpen, closeModal, gif }) => (
  <GifPortal>
    <GifModalBox isOpen={isOpen}>
      {gif && (
        <GifModalContent>
          <GifImg alt={gif.slug} src={gif.images.original.url} />
          <p>{gif.title}</p>
        </GifModalContent>
      )}
      <button onClick={() => closeModal()}>Cerrar</button>
    </GifModalBox>
  </GifPortal>
);

GifModal.propTypes = {
  gif: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bitly_url: PropTypes.string.isRequired,
    images: PropTypes.shape({
      preview_gif: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
  isOpen: PropTypes.bool.isRequired,
};

export default GifModal;
