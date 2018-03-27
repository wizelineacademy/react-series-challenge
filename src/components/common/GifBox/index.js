import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import gifs from '../../../actions/gifs'
import Gif from '../Gif'


const Box = styled.section`
width:80%;
margin:0 auto;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;

`

const gifsSelector = state => {
    return state.giphyReducer.gifs
}

const fetchingSelector = state =>{
    return state.giphyReducer.fetching
}
class GifBox extends Component{
   componentDidMount(){
       this.props.getGifsRequested()

   }
    render(){
        const { gifs, fetching } = this.props
        return( 
            <Box>
                {
                    fetching ? 
                    'loading':
                    gifs.map((g)=>{
                        console.log(g)
                        const {  id, images } = g
                        const { downsized_large} = images
                        const { url } = downsized_large
                        const isFavorite = g.isFavorite ? true : false
                        return <Gif src={ url } key={id} isFavorite={isFavorite} />
                    })
                }
            </Box>
        )
    }
}

const mapStateTopProps = state =>({
    gifs: gifsSelector(state),
    fetching: fetchingSelector(state),
})
const mapDispatchToProps = dispatch =>({
    getGifsRequested(){
        dispatch(gifs.creators.getGifsRequested())
    }
})

export default connect(mapStateTopProps,mapDispatchToProps)(GifBox)