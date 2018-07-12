import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'components/searchBar';
import GifList from 'components/gifList';
import { StyledHeading1 } from '../Heading1.style'
import { EmptyPlaceholder } from '../EmptyPlaceholder.style'

export class Favorites extends Component {
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
    if(!this.props.favorite) return null
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
    let searchToggle = null;

    if(!this.props.favorite) return null
    if(Object.keys(this.props.favorite).length === 0) {
      searchToggle = <EmptyPlaceholder>No tienes favoritos.</EmptyPlaceholder>
    } else {
      searchToggle = <GifList gifs={this.props.favorite} />;
      if (this.state.searchValue !== '') {
        if(Object.keys(filtered).length === 0) {
          searchToggle = <EmptyPlaceholder>No hay resultados para esta búsqueda.</EmptyPlaceholder>
        } else {
          searchToggle = <GifList gifs={filtered} />
        }
      }  
    }

    return (
      <React.Fragment>
        <SearchBar value={this.state.searchValue} onChange={this.handleSearch} placeholder="Buscar en favoritos..." />
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
