import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "nothing"
    };
  }
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/fav">Favs</NavLink>
          </li>
          <li>
            <input
              type="text"
              onChange={event => { this.setState({ tag: event.target.value }); }}
            />
          </li>
          <li>
            <Link
              to={{
                pathname: "/search",
                state: { query: this.state.tag }
              }}
            >
              <button type="button">Search</button>
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;