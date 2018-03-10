import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import actions from "./HomeActions";
import { TileList } from "../shared";
import { HomeWrapperStyled } from "./Home.styled";

class Home extends React.Component {
  componentDidMount() {
    this.props.getTrendingRequested();
  }

  render() {
    const { fetching, gifs } = this.props;
    return (
      <HomeWrapperStyled>
        <TileList fetching={fetching} gifs={gifs} />
      </HomeWrapperStyled>
    );
  }
}

const mapStateToProps = state => {
  const { fetching, gifs } = state.homeReducer;
  return {
    fetching,
    gifs
  };
};

const mapDispatchToProps = dispatch => {
  const { getTrendingRequested } = actions.creators;
  return bindActionCreators({ getTrendingRequested }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
