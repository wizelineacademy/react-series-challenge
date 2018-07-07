import React from 'react';
import './list-giphy.css';

export default function ListGiphy(props){
  return(
    <div className="container-giphy">
      <img  src={props.urlGiphy} alt="Giphy"/>
      {/* <p>
        {props.description}
      </p> */}
    </div>
  )
}