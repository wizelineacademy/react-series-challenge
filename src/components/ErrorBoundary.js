import React, {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'hasError': false,
        };
    }

    componentDidCatch(error, info) {
        console.group("Error");
        console.log(error);
        console.log(info);
        console.groupEnd();

        this.setState({
            'hasError': true,
        });
    }

    render() {
        return this.state.hasError ? 'ERROR (See console for details).' : this.props.children;
    }

}

export default ErrorBoundary;