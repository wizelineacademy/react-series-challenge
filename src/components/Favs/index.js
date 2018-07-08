import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import getTrendingGifsActions from '../../actions/trendingGifs'
import GifContainer from '../GifContainer'
import SearchForm from '../SearchForm'

class Favs extends Component{

    componentDidMount(){

    }
    removeFav = (event) =>{
        const {
            removeFav,
          } = this.props
        
        var id = event.target.getAttribute('data-id')
        removeFav(id)
    }



    render(){
        const favs = this.props.trendingGifs.favs
        const search = this.props.trendingGifs.searchGifs
        const removeFavFunction = this.removeFav
        let arrayGifs = []    
        if(search.length > 0){
            search.forEach(function(item, index){
                arrayGifs.push(<GifContainer key={item.id} url={item.url} alt={item.alt} id={item.id} isFav={-1} title={item.title} clickFuncion={removeFavFunction} textButton='Remove' />)
            })
        }
        else{
            favs.forEach(function(item, index){
                arrayGifs.push(<GifContainer key={item.id} url={item.url} alt={item.alt} id={item.id} isFav={-1} title={item.title} clickFuncion={removeFavFunction} textButton='Remove' />)
            })
        }
        return <div className='home'>
                    <h1>Your favs</h1>  
                    <br/>
                    <SearchForm searchOn='favs'/>
                    {arrayGifs}
                </div>
    }
}

const mapStateToProps = (state) => {
    const {
      trendingGifs,
      searchGifs,
      query
    } = state
    
    return {
      trendingGifs,
      searchGifs,
      query
    }
  }  

const mapDispatchToProps = (dispatch) => {
    const { getTrendingGifs } = getTrendingGifsActions.creators
    const { getSearchGifs } = getTrendingGifsActions.creators
    const { addFav } = getTrendingGifsActions.creators
    const { removeFav } = getTrendingGifsActions.creators
    return bindActionCreators({
        getTrendingGifs,
        getSearchGifs,
        addFav,
        removeFav
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Favs)