import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrors: false,
            info: '',
        }
    }

    componentDidCatch(error, info) {
        this.setState(() => ({
            hasErrors: true,
            info,
        }));
        console.warn('Error:', info);
    }

    render() {
        const { children } = this.props;
        const { hasErrors } = this.state;

        if (hasErrors) {
            return <span>Search not found</span>;
        }
        return children;
    }
  }
export { ErrorBoundary };
