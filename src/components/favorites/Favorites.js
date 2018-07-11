import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'components/searchBar';
import GifList from 'components/gifList';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  handleSearch = (e) => {
    let value = e.target.value;
    this.setState({
      searchValue: value
    })
  }

  filteredFavorites = () => {
    let result = {};
    let matches = Object.keys(this.props.favorite).filter(favorite => {
      let pattern = new RegExp(`.*?${this.state.searchValue}.*?`, 'i');
      let match = pattern.test(this.props.favorite[favorite].title);
      return match;
    });
    matches.forEach(match => {
      result[match] = { ...this.props.favorite[match] }
    });
    return (result);
  }

  render() {

    var filtered = this.filteredFavorites();
    let searchToggle = <GifList gifs={this.props.favorite} />;
    if (this.state.searchValue !== '') {(
      searchToggle = <GifList gifs={filtered} />
    )}

    return (
      <div className="favorites">
        <SearchBar value={this.searchValue} onChange={this.handleSearch} />
        <h1>Favorites</h1>
        { searchToggle }
      </div>
    )  
  }
}



const mapStateToProps = (state) => {
  const {
    favorite
  } = state;
  
  return {
    favorite
  };
};

export default connect(mapStateToProps)(Favorites);
