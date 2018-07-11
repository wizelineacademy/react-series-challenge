import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import getTrendingGifsActions from "../../actions/trendingGifs";
import { GifContainer, NoResults } from "../GifContainer";
import SearchForm from "../SearchForm";

class Favs extends Component {
  componentDidMount() {
    this.props.trendingGifs.searchGifs = [];
  }
  removeFav = event => {
    const { removeFav } = this.props;

    var id = event.target.getAttribute("data-id");
    removeFav(id);
  };

  render() {
    const favs = this.props.trendingGifs.favs;
    const search = this.props.trendingGifs.searchGifs;
    const removeFavFunction = this.removeFav;
    let arrayGifs = [];
    if (search.length > 0) {
      search.forEach(function(item, index) {
        arrayGifs.push(
          <GifContainer
            key={item.id}
            url={item.url}
            alt={item.alt}
            id={item.id}
            isFav={-1}
            title={item.title}
            clickFuncion={removeFavFunction}
            action="remove"
          />
        );
      });
    } else if (this.props.trendingGifs.query !== "" && search.length === 0) {
      arrayGifs = <NoResults />;
    } else {
      favs.forEach(function(item, index) {
        arrayGifs.push(
          <GifContainer
            key={item.id}
            url={item.url}
            alt={item.alt}
            id={item.id}
            isFav={-1}
            title={item.title}
            clickFuncion={removeFavFunction}
            action="remove"
          />
        );
      });
    }

    return (
      <div className="home">
        <h1>Your favs</h1>
        <br />
        <SearchForm searchOn="favs" defaultValue="" />
        {arrayGifs}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { trendingGifs, searchGifs, query } = state;

  return {
    trendingGifs,
    searchGifs,
    query
  };
};

const mapDispatchToProps = dispatch => {
  const { getTrendingGifs } = getTrendingGifsActions.creators;
  const { getSearchGifs } = getTrendingGifsActions.creators;
  const { addFav } = getTrendingGifsActions.creators;
  const { removeFav } = getTrendingGifsActions.creators;
  const { getGifsFavs } = getTrendingGifsActions.creators;
  return bindActionCreators(
    {
      getTrendingGifs,
      getSearchGifs,
      addFav,
      removeFav,
      getGifsFavs
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favs);
