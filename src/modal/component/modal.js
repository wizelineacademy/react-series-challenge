import React from 'react';
// import ListGiphy from '../../giphy/components/list-giphy';
import Heart from '../../icons/components/heart';


import './modal.css';

export default function Modal(props){
  console.log(props.listGiphy,'data del modal');
  return(
    <div className="modal">
      {/* {props.listGiphy.map((image,index) =>{
        return(
          <div>
            {console.log(image.images.downsized.url)}
          </div>
        )
      })} */}
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