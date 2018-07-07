import React, { Component } from 'react';
import ContainerListGiphy from './giphy/container/container-list-giphy';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <ContainerListGiphy />
      </div>
    );
  }
}


