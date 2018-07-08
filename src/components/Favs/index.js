import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import getTrendingGifsActions from '../../actions/trendingGifs'


class Favs extends Component{
    render(){
        const favs = this.props.trendingGifs.favs
        const addFavFunction = this.addFav
        const removeFavFunction = this.removeFav
        var arrayGifs = []
        
        if(favs.length > 0 ){
            favs.forEach(function(item, index){
                var img = <div key={index}>
                    <img src={item.url} key={'fav-' + index}/>
                    <br/>
                    <button onClick={ !item.fav ? addFavFunction:removeFavFunction} data-id={item.id}>{!item.fav ? 'FAV':'UN-FAV'}</button>
                </div>
                arrayGifs.push(img)
            })
        }
        
        return <div className='home'>
        <h1>Your favs</h1><br/>
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