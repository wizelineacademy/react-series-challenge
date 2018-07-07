import React from "react";
import { connect } from "react-redux";
import Trending from "./Trending/Trending";
import FilteredGifs from "./Filtered/Filtered";

class ListGifs extends React.Component {
  render() {
    const { trendGifs, searchGifs, onRequestTrendGifs } = this.props;
    return (
      <div>
        {searchGifs.data && searchGifs.data.length ? (
          <FilteredGifs {...searchGifs} />
        ) : (
          <Trending {...trendGifs} onRequestTrendGifs={onRequestTrendGifs} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { trendGifs, searchGifs } = state;
  console.log(trendGifs, searchGifs);
  return {
    trendGifs,
    searchGifs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestTrendGifs: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGifs);
