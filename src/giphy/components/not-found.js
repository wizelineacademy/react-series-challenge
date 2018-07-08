import React from 'react';
import image from '../../img/0757.png';
export default function NotFoud(){
  return(
    <div className="container">
      <img src={image} alt="Image Not Found"/>
      <h2>Upss Elemento no encontrado</h2>
    </div>
  )
}