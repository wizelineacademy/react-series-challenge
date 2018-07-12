import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: props.hasError,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, });
    console.log("error: ", info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.defaultProps = {
  hasError: false
}