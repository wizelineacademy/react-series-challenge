import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Connect
import Connect from '../../util/connect';

// Styles
import { GIFComponentStyled } from './GIFComponentStyles';

class GIFComponent extends Component {
  render() {
    const { onClick, gifData } = this.props;

    return (
      <GIFComponentStyled
        key={gifData.id}
        id={gifData.id}
        width={gifData.width}
        height={gifData.height}
      >
        <img id={gifData.id} alt={gifData.title} src={gifData.url} />
      </GIFComponentStyled>
    );
  }
}

GIFComponent.propTypes = {
  gifData: PropTypes.object.isRequired
};

let gIFComponent = Connect(GIFComponent);
export default gIFComponent;
