import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {fetchDetails, addFavorite, deleteFavorite} from '../actions'
import ListGiphy from './ListGimphy'


const Div = styled.div`
  text-align: center;
`

class Detail extends Component {

  handleOnclick (giphy) {
    if (giphy.id in this.props.favorites) {
      this.props.deleteFavorite(giphy)
    }else{
      this.props.addFavorite(giphy)
    }
  }

  componentDidMount () {
    const {gimphyId} = this.props.match.params
    this.props.fetchDetails(gimphyId)
  }

  render () {
    if (Object.keys(this.props.giphyDetails).length === 0) {
      return <div>Oops, It seems that this giphy does not exist!</div>
    } else {
      return (
        <Div>
          <ListGiphy
            key={this.props.giphyDetails.id}
            gimphyId={this.props.giphyDetails.id}
            url={this.props.giphyDetails.images.fixed_width.url}
            selected={this.props.giphyDetails.id in this.props.favorites}
            handleOnclick={() => this.handleOnclick(this.props.giphyDetails)}
          />
        </Div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    giphyDetails : state.gimphyList.details,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps,{fetchDetails, addFavorite, deleteFavorite})(Detail)
