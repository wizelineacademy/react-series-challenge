import React from 'react';
import Modal from '../../modal/component/modal';
import './list-giphy.css';

export default function ListGiphy(props){
  return(
    <React.Fragment>
      <div className="container-giphy" onClick={props.handleOpenModal}>
        <img  src={props.urlGiphy} alt="Giphy"/>
      </div>
      {
        props.modalVisible && 
        <Modal 
          favorites={props.favorites}
          handleCloseModal={props.handleCloseModal}
          dataGiphyModal={props.dataGiphyModal}
          colorHeart={props.colorHeart}
        />
      }
    </React.Fragment>
  )
}