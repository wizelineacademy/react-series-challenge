import React, { Component } from 'react'
import { queryTrending } from './action'
import { connect } from 'react-redux'
import Gif from "../../components/Gifs"

class HomePage extends Component {
  state = {
    openFullScreen: false,
    selectedImageUrl: ''
  }

  componentDidMount() {
    const { queryTrending } = this.props;
    queryTrending();
  }

  render() {
    const { gifs} = this.props;
    return (
        <React.Fragment>
        {
          gifs && gifs.map((gif, index) => {return <Gif url={gif.images.fixed_width.url} id={gif.id} key={gif.id}/>})
        }
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return{
  gifs: state.home.trendingGifs,
  loading: state.home.trendingLoading
}}

const mapDispatchToProps = {
  queryTrending
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);