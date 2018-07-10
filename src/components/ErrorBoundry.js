import React, { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasErrors: false,
            info: '',
        }
    }
    state = {

    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(prevState.hasErrors){
            if(nextProps.gifts.length > 0 ){
                return {
                    hasErrors: false,
                };
            };
        }
        return null;
    }

    componentDidCatch(error, info) {
        this.setState(() => ({
            hasErrors: true,
            info,
        }));
        console.warn('Error:', info);
    }

    render() {
        const { children, component } = this.props;
        const { hasErrors } = this.state;

        if (hasErrors) {
            return component;
        }
        return children;
    }
}

export default ErrorBoundary ;
