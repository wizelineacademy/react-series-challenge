import React from "react";
import { connect } from "react-redux";
import Item from "../Gifs/Item";
import TrendingErrorBoundary from "./TrendingErrorBoundary";

class Trending extends React.Component {
  componentDidMount() {
    this.props.onRequestTrendGifs();
  }

  render() {
    const { fetching, data, error } = this.props;
    return (
      <TrendingErrorBoundary>
        <div>
          {error ? (
            <div>ERROR: {error.message}</div>
          ) : !fetching && data && data.length ? (
            data.map(item => <Item key={item.id} item={item} />)
          ) : (
            <div>Cargando...</div>
          )}
        </div>
      </TrendingErrorBoundary>
    );
  }
}

const mapStateToProps = state => {
  const {
    trendGifs: { fetching, data, error }
  } = state;
  return {
    fetching: fetching,
    data,
    error: error
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
)(Trending);
