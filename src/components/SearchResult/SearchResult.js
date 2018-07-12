import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// actions
import { add, getFavorites, searchGif, deleteFav } from "./../../actions";

// Components
import Search from './../Search/Search';
import Menu from './../Sidebar/Sidebar';

class SearchResult extends Component {
  favorites = (obj) => {
    this.props.add(obj);
  }

  handleClick = (id) => {
    this.props.deleteFav(id);
  }

  render() {
    const { result, favorites } = this.props
    let gifCatalog;

    if (Object.keys(result).length) {
      gifCatalog = result.data.map((v) => {
        const index = v.id;
        const check = (favorites || []).some(({ id }) => id === index);

        return (
          <div key={index} className="row">
            <div className="col">
              <div className="gif">
                <div className="product-image">
                  <img src={v.images.fixed_height_small.url} alt="" />
                </div>
              </div>
            </div>
            {
              (!check ?
                <button onClick={() => { this.favorites({ url: v.images.fixed_height_small.url, id: v.id, title: v.title }) }}>
                  Agregar a favoritos
                </button> :
                <button onClick={() => { this.handleClick(v.id) }}>Eliminar de mis favoritos</button>
              )
            }
            <span>{(check ? 'favorito' : '')}</span>
          </div>
        );
      })
    }

    return (
      <div>
        <Menu />
        <Search />
        {gifCatalog}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    result: state.searchGif,
    favorites: state.favorites,
  }
}

SearchResult.propTypes = {
  add: PropTypes.func,
  deleteFav: PropTypes.func,
  getFavorites: PropTypes.func,
  searchGif: PropTypes.func,
};

SearchResult.defaultProps = {
  add: () => { },
  deleteFav: () => { },
  getFavorites: () => { },
  searchGif: () => { },
}


export default connect(mapStateToProps, {
  add,
  deleteFav,
  getFavorites,
  searchGif,
})(SearchResult);