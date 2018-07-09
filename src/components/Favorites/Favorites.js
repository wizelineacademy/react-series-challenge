import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// actions
import { deleteFavorites, getFavorites } from './../../actions'

// UI
import UI from "./Favorites.ui";

class Favorites extends Component {

    componentDidMount() {
        this.props.getFavorites();
      }

    handleClick = (id) =>{
        this.props.deleteFavorites(id)
    }

    render() {
        const favoritesList = JSON.parse(localStorage.getItem('favorites'));

        return(
            <UI
                favoritesList={favoritesList}
                handleClick={this.handleClick}
            />
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
    deleteFavorites: PropTypes.func,
    getFavorites: PropTypes.func,
};

Favorites.defaultProps = {
    deleteFavorites: () => {},
    getFavorites: () => {},
}
    
  
export default connect(mapStateToProps, {
    deleteFavorites,
    getFavorites,
})(Favorites);


