import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import TileList from "../shared/TileList";
import {
  EmptyFavsContainerStyled,
  EmptyFavsMessageStyled
} from "./Favs.styled";

const Favs = ({ favs }) => {
  if (!favs.length) {
    return (
      <EmptyFavsContainerStyled>
        <EmptyFavsMessageStyled>
          empty favs collection, go <Link to="">home</Link> and click some
          hearts.
        </EmptyFavsMessageStyled>
      </EmptyFavsContainerStyled>
    );
  }

  return <TileList gifs={favs} />;
};

const mapStateToProps = state => {
  const { favs } = state.favsReducer;
  return { favs };
};

export default connect(mapStateToProps, null)(Favs);
