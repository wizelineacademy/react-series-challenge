import React, { Component } from 'react';

class ThemeSelector extends Component {

    render() {
        return(<button onClick = {this.props.changeTheme}> Tema Oscuro </button>);
    }
}

export default ThemeSelector;