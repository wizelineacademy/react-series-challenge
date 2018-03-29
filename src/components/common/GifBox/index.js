import React, { Component } from 'react'
import styled from 'styled-components'
import Gif from '../Gif'


const Box = styled.section`
width:99%;
margin:0 auto;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;

`

class GifBox extends Component{
  
    render(){
        const { gifs, fetching, likeGif, unlikeGif } = this.props
        return( 
            <Box>
                {
                    fetching ? 
                    'loading':
                    gifs.map((g, index)=>{
                        const gif = {...g,index}
                        const {  id, images } = gif
                        const { downsized_large} = images
                        const { url } = downsized_large
                        const isFavorite = g.isFavorite ? true : false
                        return <Gif src={ url } key={id} data={gif} isFavorite={isFavorite} onClickIcon={isFavorite ? unlikeGif : likeGif} />
                    })
                }
            </Box>
        )
    }
}



export default GifBox