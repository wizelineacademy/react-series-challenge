import React, { Component } from 'react'
import { connect } from 'react-redux'
import gifs from '../../actions/gifs'
import GifBox from './../common/GifBox';
import SearchBar from './../common/SearchBar';

const gifsSelector = state => {
    return state.giphyReducer.gifs
}

const fetchingSelector = state =>{
    return state.giphyReducer.fetching
}

class Home extends Component{
    componentDidMount(){
        this.props.getGifsRequested()
 
    }
   render(){
    const { gifs, fetching, likeGif, unlikeGif, searchGifsRequested } = this.props
    return(
    <section>
       <SearchBar searchFunction={searchGifsRequested}/>
       <GifBox gifs={gifs} fetching={ fetching } likeGif={ likeGif } unlikeGif={unlikeGif} />
    </section>)
   }
}

const mapStateTopProps = state =>({
    gifs: gifsSelector(state),
    fetching: fetchingSelector(state),
})
const { creators } = gifs
const { likeGif, unlikeGif, searchGifsRequested } = creators
const mapDispatchToProps = dispatch =>({
    getGifsRequested(){
        dispatch(gifs.creators.getGifsRequested())
    },
    likeGif(gif){
        dispatch(likeGif(gif))
    },
    unlikeGif(gif){
        dispatch(unlikeGif(gif))
    },
    searchGifsRequested(query){
        dispatch(searchGifsRequested(query))
    },
})
export default connect(mapStateTopProps,mapDispatchToProps)(Home)