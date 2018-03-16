import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../presentational/Container'
import Giphy from '../presentational/Giphy';
import { fetchGiphyDetail } from '../../actions';

class GiphyDetail extends Component {
  componentWillMount() {
    const { giphyId } = this.props.match.params;
    this.props.fetchGiphyDetail(giphyId);
  }

  render() {
    if (!this.props.giphy) {
      return null;
    }

    return (
      <Container title={this.props.giphy.title}>
        <Giphy giphy={this.props.giphy} size='original' />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    giphy: state.detail.giphy
  }
};

export default connect(mapStateToProps, { fetchGiphyDetail })(GiphyDetail);