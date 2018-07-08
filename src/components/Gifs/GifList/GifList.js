import React from 'react';
import GifCard from '../GifCard/GifCard'
import './GifList.css'

const GifList = ({data}) => {
  const gifs = data.map((gif, index) => (
    <GifCard src={gif.gifImage} key={index}/>
  ))

  return (
    <section className="GifList">
      {gifs}
    </section>
  )
}

export default GifList