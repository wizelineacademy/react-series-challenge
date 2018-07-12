import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// actions
import { searchGif } from "./../../actions";

class Search extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.history.push(`/search/${this.state.searchForm.searchField}`);
    this.props.searchGif(this.state.searchForm.searchField)
  }


  render() {
    const { searchForm } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
  searchGif: PropTypes.func,
  addFavorites: PropTypes.func,
  getFavorites: PropTypes.func,
};

Search.defaultProps = {
  searchGif: () => { },
}

export { Search as Pure }
export default connect(mapStateToProps, {
  searchGif,
})(Search);