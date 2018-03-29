import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import gifs from '../../actions/gifs'
import BigGif from './../common/BigGif';

const gifsSelector = state => {
    return state.giphyReducer.gifs
}

const fetchingSelector = state =>{
    return state.giphyReducer.fetching
}

const Box = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`



class Detail extends Component{
   
    constructor(props){
        super(props)
            const { match } = this.props
            
            const id = match.params.id
            
            this.props.getOneGif({id})
    }
    render(){
        
        const { fetching, likeGif, unlikeGif } = this.props
       
      
        
        return(
            <Box>
                    {
                    fetching ?
                    'loading':
                    <BigGif  
                    src={
                        this.props.gifs[0].images.downsized_large.url } 
                    key={
                        this.props.gifs[0].id}
                     data={ this.props.gifs[0] } 
                     isFavorite={
                        this.props.gifs[0].isFavorite}
                      onClickIcon={
                        this.props.gifs[0].isFavorite ?
                        unlikeGif : likeGif} />
                            }
                
            </Box>
        )
    }
}

const mapStateTopProps = state =>({
    
    gifs: gifsSelector(state),
    fetching: fetchingSelector(state),
})
const { creators } = gifs
const { likeGif, unlikeGif, getOneGif } = creators
export const mapDispatchToProps = dispatch =>({
    getOneGif(id){
        dispatch(getOneGif(id))
    },
    likeGif(gif){
        dispatch(likeGif(gif))
    },
    unlikeGif(gif){
        dispatch(unlikeGif(gif))
    },
    
})
export default connect(mapStateTopProps,mapDispatchToProps)(Detail)
