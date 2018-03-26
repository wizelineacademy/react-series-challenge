import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddTransactionButtonContainerStyled, GifPreview } from "./SearchResults.styled"
import search from '../../actions/search';
import SVG from "../SVG";
import GifThumb from "../GifThumb";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount()
  {
    
  }

  render() {
    console.log(this.props.search);
    var trendingItems = this.props.search.gifs.map(function(item, index){
      return (<GifThumb key={item.id} id={item.id} image={item.images.preview_gif.url}/>);
    });
    var loader = (this.props.search.fetching ? SVG.Loader : null);
    return (
      <div>
          <h1>Search Results</h1>
          <div>{loader}</div>
          <div>{trendingItems}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = (dispatch) => {
  const { getTrendingRequested } = search.creators;

  return bindActionCreators({
    getTrendingRequested
  }, dispatch);
}

export default connect(mapStateToProps, null)(SearchResults);
