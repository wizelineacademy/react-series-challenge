import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  handleSearch = () => {
    const { onRequestSearchGifs } = this.props;
    onRequestSearchGifs(this.searchInput.value);
  };

  handleKeyPress = e => {
    var keyCode = e.which || e.keyCode;
    const { onRequestSearchGifs } = this.props;
    if (keyCode === 13) {
      onRequestSearchGifs(e.target.value);
      return false;
    }
  };

  render() {
    return (
      <div>
        <div />
        <nav>
          <NavLink to="/">Trending Gifs</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
        <div>
          <input
            type="text"
            placeholder="Search gifs..."
            ref={el => (this.searchInput = el)}
            onKeyPress={this.handleKeyPress}
            // onChange={e => handleOnChange(onRequestSearchGifs, e)}
          />
          <button onClick={this.handleSearch}>
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    );
  }
}

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
