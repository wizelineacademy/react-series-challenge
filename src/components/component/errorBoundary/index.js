import React, { Component} from "react";

class ErrorBoundary extends Component{
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      info: '',
    };
  }

  componentDidCatch(error, info) {
    debugger;
    this.setState(() => {
      return {
        hasError: true,
        info,
      }
    });
    console.warn('Error', info);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) return <div></div>;

    return children;

  }
};

export default ErrorBoundary;