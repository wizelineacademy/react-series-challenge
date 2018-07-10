import React, { Component } from 'react'
import { withdrawFav } from './action'
import { connect } from 'react-redux'
import Gif from "../../components/Gif"

class FavPage extends Component {

  getGifs(gifs){
      const images=gifs && gifs.map((gif, index) => {return <Gif url={gif.url} id={gif.id} key={gif.id} />});
      return images;
  }


  render() {
    
    return (
        <React.Fragment>
        {
          this.getGifs(this.props.gifs)
        }
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return{
    gifs: state.fav.favGifs
  }
}

const mapDispatchToProps = {
  withdrawFav
}

export default connect(mapStateToProps, mapDispatchToProps)(FavPage);