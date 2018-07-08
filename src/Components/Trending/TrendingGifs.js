import React from "react";
import { connect } from "react-redux";
import Item from "../Gifs/Item";

class Trending extends React.Component {
  componentDidMount() {
    this.props.onRequestTrendGifs();
  }

  render() {
    const { fetching, data, error } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>Trending</h2>
        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            {!fetching && data && data.length ? (
              <div>{data.map(item => <Item key={item.id} item={item} />)}</div>
            ) : (
              <p>Cargando...</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    trendGifs: { fetching, data, error }
  } = state;
  console.log(data);
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
