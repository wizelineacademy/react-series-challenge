import React from "react";
import { connect } from "react-redux";

class Trending extends React.Component {
  render() {
    const { fetching, data, error, onRequestTrendGifs } = this.props;
    return (
      <div>
        Trending
        <button onClick={onRequestTrendGifs} disabled={fetching}>
          Fetch
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    data: state.data,
    error: state.error
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
