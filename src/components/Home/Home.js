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

  markFavorite(gifs, favs) {
    console.log(favs)
    return gifs.map(gif => ({
      ...gif,
      favorite: favs.some(fav => fav.id === gif.id)
    }));
  }

  render() {
    const { fetching, gifs, favs } = this.props;
    const marked = this.markFavorite(gifs, favs);
    return (
      <HomeWrapperStyled>
        <TileList fetching={fetching} gifs={marked} />
      </HomeWrapperStyled>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const { favs } = state.favsReducer;
  const { fetching, gifs } = state.homeReducer;
  return {
    fetching,
    gifs,
    favs
  };
};

const mapDispatchToProps = dispatch => {
  const { getTrendingRequested } = actions.creators;
  return bindActionCreators({ getTrendingRequested }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
