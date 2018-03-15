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
  
  values(obj) {
    var willReturn = [];
  
    for (var key in obj) {
      willReturn.push(obj[key]);
    }
  
    return willReturn;
  }

  renderPreviews = () => (
    this.values(this.props.data).map(( giphy, index ) => (
      <GiphyPreview
        onSelect={ this.props.onSelect }
        onFavClick={ this.props.onFavClick}
        allData={ giphy }
        isFav={ giphy.isFav }
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