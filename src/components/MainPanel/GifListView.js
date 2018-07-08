import React, { Component } from 'react';
import GifView from './GifView';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import actions from "../../actions";
const { getTrendingGifs } = actions.creators;

class GifListView extends Component {

  componentDidMount() {
    this.props.getTrendingGifs();
  }
  
  render() {
    const {data, getTrendingGifs} = this.props;
    const gifs = data.map((gif) => (
      <GifView src={gif.url} key={gif.id} />
    ))
    return (
      <div style={{width: '100%'}}>
        {gifs}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.trendingGifs
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({getTrendingGifs}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(GifListView);