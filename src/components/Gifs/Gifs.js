import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// Components
import Search from './../Search/Search';
import Menu from './../Sidebar/Sidebar';

// actions
import { add, getFavorites, deleteFav } from "./../../actions";

class Gifs extends Component {
  favorites = (e, obj) => {
    e.preventDefault();
    this.props.add(obj);
  }

  handleClick = (id) => {
    this.props.deleteFav(id);
  }

  render() {
    const { data, favorites } = this.props;
    let gifCatalog;

    if (Object.keys(data).length) {
      gifCatalog = data.data.map((v) => {
        const index = v.id;
        const check = (favorites || []).some(({ id }) => {
          return id === v.id;
        });

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
                <button onClick={(e) => { this.favorites(e, { url: v.images.fixed_height_small.url, id: v.id, title: v.title }) }}>
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
    data: state.gif,
    favorites: state.favorites,
  }
}

Search.propTypes = {
  add: PropTypes.func,
  deleteFav: PropTypes.func,
  getFavorites: PropTypes.func,
};

Search.defaultProps = {
  add: () => { },
  deleteFav: () => { },
  getFavorites: () => { },
}


export default connect(mapStateToProps, {
  add,
  deleteFav,
  getFavorites
})(Gifs);