import React from "react";

class TrendingErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasErrors: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasErrors: true });
    console.log("INFO", info);
  }

  render() {
    const { children } = this.props;
    const { hasErrors } = this.state;

    if (hasErrors) {
      return (
        <div>
          Error al recuperar los GIF's más destacados. ¡Intenta más tarde!
        </div>
      );
    }

    return children;
  }
}

export default TrendingErrorBoundary;
