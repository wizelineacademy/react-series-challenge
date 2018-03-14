import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../logo.svg';

class Navbar extends Component {
  render () {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favs">Favorites</NavLink>
        </nav>
      </header>
    )
  }
}

export default Navbar
