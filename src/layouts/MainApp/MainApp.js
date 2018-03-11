import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MainAppLayout extends Component {
  static defaultProps = {
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
  render () {
    return (
      <div>
        Hello World
      </div>
    );
  }
}