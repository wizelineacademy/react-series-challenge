import React, { Component } from "react";
import Gif from "./Gif";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import trendingGifs from "../redux/actions/trendingGifs";

class Home extends Component {
    componentDidMount() {
        console.log(this.props
        );
        this.props.requestTrendingGifs();
        
        
    }

    gifs=(image)=>{
        <Gif id={image.id} src={image.images.fixed_width.url} liked={false} />
    }

    render() {
    return <React.Fragment>
                {this.props.data!==undefined 
            ?this.props.data.data.map(this.gifs):null}
            </React.Fragment>
    }
}

const mapStateToProps = (state) => {
    const {
      data
    } = state;
    
    return {
      data
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    const { requestTrendingGifs } = trendingGifs.creators;
  
    return bindActionCreators({
        requestTrendingGifs,
    }, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);