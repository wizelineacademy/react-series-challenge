import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const handleOnChange = (onRequestSearchGifs, e) => {
  console.log(e.target.value);
  onRequestSearchGifs(e.target.value);
};

const Navbar = ({ onRequestSearchGifs }) => (
  <div>
    <div />
    <nav>
      <NavLink to="/">Trending Gifs</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
    <div>
      <i className="fas fa-search" />
      <input
        type="text"
        placeholder="Search gifs..."
        onChange={e => handleOnChange(onRequestSearchGifs, e)}
      />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    onRequestSearchGifs: query =>
      dispatch({ type: "API_CALL_SEARCH_REQUEST", query })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
