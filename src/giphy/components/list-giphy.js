import React from 'react';

export default function ListGiphy(props){
  // this.state.dataGiphy.data,
  // this.state.dataGiphy.data.data[0].images.downsized.url
  console.log(props.urlGiphy, 'props');
  return(
    <section>
      <div>
        <img  src={props.urlGiphy} alt="Giphy"/>
        <span>
          {props.description}
        </span>
      </div>
    </section>
  )
}