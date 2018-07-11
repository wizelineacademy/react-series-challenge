import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import getTrendingGifsActions from "../../actions/trendingGifs";
import { GifContainer, NoResults } from "../GifContainer";
import SearchForm from "../SearchForm";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      showSearchResults: false
    };
  }

  componentDidMount() {
    const { getTrendingGifs } = this.props;
    getTrendingGifs();
  }

  addFav = event => {
    const { addFav } = this.props;

    var id = event.target.getAttribute("data-id");

    addFav(id);
  };

  removeFav = event => {
    const { removeFav } = this.props;

    var id = event.target.getAttribute("data-id");
    removeFav(id);
  };

  render() {
    const trendingGifs = this.state.showSearchResults
      ? this.props.trendingGifs.searchGifs
      : this.props.trendingGifs.trendingGifs;
    const favs = this.props.trendingGifs.favs;
    const addFavFunction = this.addFav;
    var arrayGifs = [];
    trendingGifs.forEach(function(item, index) {
      let isFav = favs.findIndex(obj => obj.id === item.id);
      arrayGifs.push(
        <GifContainer
          key={item.id}
          url={item.url}
          alt={item.alt}
          id={item.id}
          isFav={isFav}
          title={item.title}
          clickFuncion={addFavFunction}
          action="add"
        />
      );
    });

    if (arrayGifs.length === 0) {
      arrayGifs = <NoResults />;
    }

    return (
      <div>
        <h1>Trending</h1>
        <br />
        <SearchForm searchOn="all" />
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
  return bindActionCreators(
    {
      getTrendingGifs,
      getSearchGifs,
      addFav,
      removeFav
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
