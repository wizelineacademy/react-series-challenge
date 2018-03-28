import React from 'react';
import { connect } from 'react-redux';
import SVG from "../SVG";
import { Title } from "./SearchResults.styled"
import GifThumb from "../GifThumb";

export class SearchResultsComponent extends React.Component {
  render() {
    var trendingItems = null;
    if (!this.props.search.fetching)
    {
      trendingItems = this.props.search.gifs.map(function(item, index){
        
        return (<GifThumb key={item.id} id={item.id} image={item.images.preview_gif.url} title={item.title}/>);
      });
    }
    
    var loader = (this.props.search.fetching ? SVG.Loader : null);
    return (
      <div>
          <Title>Search Results</Title>
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
