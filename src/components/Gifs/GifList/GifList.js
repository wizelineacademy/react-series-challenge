import React from 'react';
import GifCard from '../GifCard/GifCard'
import './GifList.css'

const GifList = ({data, addFavorites}) => {
  let gifs

  if (data) {
    gifs = data.map((gif, index) => {
      const {id, images, title} = gif
      const dataGif = {
        id,
        images,
        title
      }

      return (
        <GifCard
          gif={dataGif}
          key={dataGif.id}
          addFavorites={addFavorites}
        />
      )
    })
  } else {
    gifs = 'No gifs to Show'
  }

  return (
    <section className="GifList">
      {gifs}
    </section>
  )
}

export default GifList