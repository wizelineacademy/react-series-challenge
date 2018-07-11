import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'components/searchBar';
import GifList from 'components/gifList';
import { StyledHeading1 } from '../Heading1.style'

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
      <React.Fragment>
        <SearchBar value={this.searchValue} onChange={this.handleSearch} placeholder="Buscar en favoritos..." />
        <StyledHeading1>Los más chidos... según yo</StyledHeading1>
        { searchToggle }
      </React.Fragment>
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
