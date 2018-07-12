import React from 'react';
import GifCard from '../GifCard/GifCard'
import { GifListWrapper } from './GifList.styled'

const GifList = ({data}) => {
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
          // addFavorites={addFavorites}
        />
      )
    })
  } else {
    gifs = 'No gifs to Show'
  }

  return (
    <GifListWrapper>
      {gifs}
    </GifListWrapper>
  )
}

export default GifList