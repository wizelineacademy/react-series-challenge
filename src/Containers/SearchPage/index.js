import React, { Component } from 'react'
import { querySearch } from './action'
import { connect } from 'react-redux'


class SearchPage extends Component {
  state = {
    openFullScreen: false,
    selectedImageUrl: ''
  }

  componentDidMount() {
    const { querySearch } = this.props;
    querySearch({q:this.props.location.state.query});
    console.log();
    //
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
  gifs: state.search.searchGifs,
  loading: state.search.searchLoading
}}

const mapDispatchToProps = {
  querySearch
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);