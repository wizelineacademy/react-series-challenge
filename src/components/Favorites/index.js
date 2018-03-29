import React, { Component } from 'react'
import { connect } from 'react-redux'
import gifs from '../../actions/gifs'

import GifBox from './../common/GifBox/index';
import SearchBar from './../common/SearchBar';

const gifsSelector = state => {
    return state.giphyReducer.gifs
}

const fetchingSelector = state =>{
    return state.giphyReducer.fetching
}

class Favorites extends Component{
    componentDidMount(){
        this.props.getGifsLocalRequested()
 
    }
   render(){
    const { gifs, fetching, likeGif, unlikeGif, searchGifsLocalRequested } = this.props
    return(
    <section>
        <SearchBar searchFunction={searchGifsLocalRequested}/>
       <GifBox gifs={gifs} fetching={ fetching } likeGif={ likeGif } unlikeGif={unlikeGif} />
    </section>)
   }
}

const mapStateTopProps = state =>({
    gifs: gifsSelector(state),
    fetching: fetchingSelector(state),
})
const { creators } = gifs
const { likeGif, unlikeGif, searchGifsLocalRequested } = creators
const mapDispatchToProps = dispatch =>({
    getGifsLocalRequested(){
        dispatch(gifs.creators.getGifsLocalRequested())
    },
    likeGif(gif){
        dispatch(likeGif(gif))
    },
    unlikeGif(gif){
        dispatch(unlikeGif(gif))
    },
    searchGifsLocalRequested(query){
        dispatch(searchGifsLocalRequested(query))
    },
})
export default connect(mapStateTopProps,mapDispatchToProps)(Favorites)