import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class InfoPortal extends Component {
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById('info-portal'),
        );
    }
}

export default InfoPortal;