import React, { Component } from 'react'
import { queryTrending } from './action'
import { connect } from 'react-redux'


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
          gifs && gifs.map((gif, index) => {return <img src={gif.images.fixed_width.url} key={gif.id}/>})
        }
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return{
  gifs: state.home.trendingGifs,
  loading: state.home.trendingLoading
}}

const mapDispatchToProps = {
  queryTrending
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);