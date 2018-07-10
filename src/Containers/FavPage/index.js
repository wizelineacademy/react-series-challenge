import React, { Component } from 'react'
import { withdrawFav } from './action'
import { connect } from 'react-redux'
import Gif from "../../components/Gif"

class FavPage extends Component {
    constructor(props) {
      super(props);
      this.state={
        gifs:undefined
      }
      this.getGifs = this.getGifs.bind(this);
    }

  componentDidMount(){
      this.getGifs(this.props.gifs);
  }

  getDervidedStateFromProps(){
    this.setState({
      gifs:this.props.gifs
    });
  }

  getGifs(gifs){
      const images=gifs && gifs.map((gif, index) => {return <Gif url={gif.url} id={gif.id} key={gif.id} />});
      this.setState({
        gifs:images
      });
  }

  componentDidUpdate(){
      console.log(this.state.gifs);
      
      
  }

  render() {
    
    return (
        <React.Fragment>
        {
          this.state.gifs
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