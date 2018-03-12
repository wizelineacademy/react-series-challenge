import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GiphyPreview from './GiphyPreview';
import {
  GridStyled
} from './GiphyGrid.styled'

export class GiphyGrid extends Component {
  static defaultProps = {
    data: [],
  };
  static propTypes = {
    children: PropTypes.node,
  };
  constructor (props) {
    super(props);

    /* istanbul ignore next */
    this.state = (() => {
    })();
  }

  renderPreviews = () => (
    this.props.data.map(( giphy, index ) => (
      <GiphyPreview
        onSelect={ this.props.onSelect } 
        key={ index }
        preview_gif={ giphy.images.preview_gif } 
        title={ giphy.title }
        id={ giphy.id }
      />
    ))
  )

  render () {
    return (
      <GridStyled>
        {this.renderPreviews()}
      </GridStyled>
    );
  }
}