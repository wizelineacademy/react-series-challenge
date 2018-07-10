import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {UlStyled, LiStyled, InputTextStyled,ButtonTextStyled} from "./Navbar.style"

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
        <UlStyled>
          <LiStyled>
            <NavLink to="/">Home</NavLink>
          </LiStyled>
          <LiStyled>
          <NavLink to="/fav">Favs</NavLink>
          </LiStyled>
          <LiStyled>
          <InputTextStyled
              type="text"
              onChange={event => { this.setState({ tag: event.target.value }); }}
            />
          </LiStyled>
          <LiStyled>
            <Link
              to={{
                pathname: "/search",
                state: { query: this.state.tag }
              }}
            >
              <ButtonTextStyled type="button">Search</ButtonTextStyled>
            </Link>
          </LiStyled>
        </UlStyled>
      </React.Fragment>
    );
  }
}

export default Navbar;