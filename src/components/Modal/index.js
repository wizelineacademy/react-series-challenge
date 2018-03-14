import React from "react";
import { Overlay, Container } from "./Modal.styled";
import GiphyDetails from "../GiphyDetails";

const Modal = props => {
  const { open, onCloseModal, selectedGiphy, onFavClick } = props;

  if (!open) {
    return null;
  }
  console.log('whats here',props)
  return (
    <Container>
      <GiphyDetails onFavClick={ onFavClick } { ...selectedGiphy } />
      <Overlay onClick={onCloseModal} />
    </Container>
  );
};

export default Modal;
