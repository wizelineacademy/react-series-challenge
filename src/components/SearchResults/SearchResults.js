import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddTransactionButtonContainerStyled, GifPreview } from "./SearchResults.styled"
import search from '../../actions/search';
import SVG from "../SVG";
import GifThumb from "../GifThumb";

export class SearchResultsComponent extends React.Component {
  render() {
    var trendingItems = null;
    if (!this.props.search.fetching)
    {
      trendingItems = this.props.search.gifs.map(function(item, index){
        
        return (<GifThumb key={item.id} id={item.id} image={item.images.preview_gif.url}/>);
      });
    }
    
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

export default connect(mapStateToProps, null)(SearchResultsComponent);
