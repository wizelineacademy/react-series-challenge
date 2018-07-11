import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// actions
import { deleteFav, getFavorites, filterFavorites } from './../../actions'

// Components
import Menu from './../Sidebar/Sidebar';

class Favorites extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      searchForm: {
        searchField: '',
      },
    };
  }

  handleChange = (e, data) => {
    const keys = data.split('.');
    const searchForm = this.state;
    searchForm[keys[0]][keys[1]] = e.target.value;
    this.setState(searchForm);
  }

  handleClick = (id) => {
    this.props.deleteFav(id);
  }

  gitFilter = (e) => {
    e.preventDefault();
    this.props.filterFavorites({ param: this.state.searchForm.searchField, favorites: this.props.favorites });
  }

  render() {
    let gifCatalog;
    const { favorites } = this.props;
    const { searchForm } = this.state;

    if (favorites && Object.keys(favorites).length) {
      gifCatalog = favorites.map((v, i) => {
        const index = `${i}--${v.id}`;

        return (
          <div key={index} className="row">
            <div className="col">
              <div className="gif">
                <div className="product-image">
                  <img src={v.url} alt="" />
                </div>
              </div>
            </div>
            <button onClick={() => { this.handleClick(v.id) }}>Eliminar de mis favoritos</button>
          </div>
        );
      })
    }

    return (
      <div>
        <Menu />
        <div>
          <form onSubmit={this.gitFilter}>
            <span>Escribe el nombre de un gif</span>
            <input
              id="search"
              type="text"
              value={searchForm.searchField}
              onChange={(e) => { this.handleChange(e, 'searchForm.searchField'); }}
            />
            <button type="submit">Realizar busqueda</button>
          </form>
        </div>
        {gifCatalog}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.gif,
    favorites: state.favorites,
  }
}

Favorites.propTypes = {
  deleteFav: PropTypes.func,
  getFavorites: PropTypes.func,
  filterFavorites: PropTypes.func,
};

Favorites.defaultProps = {
  deleteFav: () => { },
  getFavorites: () => { },
  filterFavorites: () => { },
}

export default connect(mapStateToProps, {
  deleteFav,
  getFavorites,
  filterFavorites,
})(Favorites);


