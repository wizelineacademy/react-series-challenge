import React, { Component } from 'react';

class ThemeSelector extends Component {

    render() {
        return(<button onClick = {this.props.changeTheme}> Press me to change </button>);
    }
}

export default ThemeSelector;