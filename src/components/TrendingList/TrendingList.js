import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddTransactionButtonContainerStyled, GifPreview } from "./TrendingList.styled"
import trending from '../../actions/trending';
import SVG from "../SVG";
import GifThumb from "../GifThumb";

class TrendingList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount()
  {
    this.props.getTrendingRequested();
  }

  render() {
    var trendingItems = this.props.trending.gifs.map(function(item, index){
      return (<GifThumb key={item.id} id={item.id} image={item.images.preview_gif.url}/>);
    });
    var loader = (this.props.trending.fetching ? SVG.Loader : null);
    return (
      <div>
          <h1>Trending</h1>
          <div>{loader}</div>
          <div>{trendingItems}</div>
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
