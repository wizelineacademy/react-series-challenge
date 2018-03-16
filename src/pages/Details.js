import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

class Details extends Component{
  render () {
    if (this.props.loading || !this.props.singleGif) {
      return null
    }
    return (
      <ImageStyled
        src={this.props.singleGif.images.original.url}
        alt={this.props.singleGif.slug} />
    )
  }

  componentDidMount () {
    this.props.fetchById(this.props.match.params.id)
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    singleGif: state.singleGif
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchById: (id) => dispatch({ type: 'FETCH_BY_ID', id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);

const ImageStyled = styled.img`
  margin: 30px auto;
  padding: 0;
  display: block;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
`
