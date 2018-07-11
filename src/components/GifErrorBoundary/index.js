import React, { Component } from 'react';

class GifErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasErrors: false, errorInfo: '' };
  }
  componentDidCatch(error, info) {
    this.setState({ hasErrors: true, errorInfo: info });
  }
  render() {
    const { children } = this.props;
    const { hasErrors } = this.state;
    if (hasErrors) {
      return <div>GIF no disponible</div>;
    }

    return children;
  }
}

export default GifErrorBoundary;
