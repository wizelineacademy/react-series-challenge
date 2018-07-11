import React, { Component } from 'react';
import { withdrawFav } from './action';
import { connect } from 'react-redux';
import Gif from "../../components/Gifs";

class FavPage extends Component {
  render() {
    
    return (
        <React.Fragment>
        {
          this.props.gifs && this.props.gifs.map((gif, index) => {return <Gif url={gif.url} id={gif.id} key={gif.id} />})
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