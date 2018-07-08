import React from 'react';
// import ListGiphy from '../../giphy/components/list-giphy';
import Heart from '../../icons/components/heart';


import './modal.css';

export default function Modal(props){
  // console.log(props.dataGiphyModal);
  return(
    <div className="modal">
      {/* <img  /> */}
      <button className="modal-close" onClick={props.handleCloseModal}></button>

      <section>
        <p>
          Marca este Giphy como tu favorito
        </p>
        <div>
          <Heart 
            favorites={props.favorites}
            colorHeart={props.colorHeart}
          />
        </div>
      </section>
    </div>
  )
} 