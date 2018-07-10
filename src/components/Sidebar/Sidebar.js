import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Catalogo</Link>
          <Link to="/favorites">Favoritos</Link>
        </nav>
      </div>
    );
  }
}

export default Search;