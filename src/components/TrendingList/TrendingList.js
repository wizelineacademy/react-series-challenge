import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddTransactionButtonContainerStyled } from "./TrendingList.styled"
import trending from '../../actions/trending';

class TrendingList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount()
  {
    this.props.getTrendingRequested();
  }

  render() {
    var text = JSON.stringify(this.props.trending);
    return (
      <div>
          <h1>Trending</h1>
          <div>{text}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    trending: state.trending
  };
};

const mapDispatchToProps = (dispatch) => {
  const { getTrendingRequested } = trending.creators;

  return bindActionCreators({
    getTrendingRequested
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingList);
