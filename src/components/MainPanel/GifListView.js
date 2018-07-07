import React from 'react';
import GifView from './GifView';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import actions from "../../actions";
const { getTrendingGifs } = actions.creators;

const GifListView = ({data, getTrendingGifs}) => {
  

  return (
    <div>
      <GifView src='https://media1.giphy.com/media/3oEdv03JAv74J6KGTS/giphy.gif' favorite />
      <pre>{JSON.stringify(data)}</pre>
      <button onClick={getTrendingGifs} />
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.trendingGifs
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({getTrendingGifs}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(GifListView);