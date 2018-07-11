import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/favorites';
import { Wrapper } from '.././App.style.js';

class Favorites extends Component {
  constructor() {
    super();
  
    this.state = {
      favorites: []
    }
  
    store.subscribe(() => {
      this.setState({
        favorites: store.getState().favorites
      });
    });

  }

  render() {
    return (
      <div>
        <p>My Favorites</p>

        <Wrapper>
            { this.state.favorites.map(
              gif => <div className="element" key={gif.id}>
                      <img src={gif.images.downsized_medium.url} className="thegif" alt={gif.title}/>
                      <p onClick={() => this.addFavorite(gif)}>Like</p>
                    </div>
            )}
          </Wrapper>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  const {
    
  } = actions;

  return bindActionCreators(
    {
      
    },
    dispatch
  );
};

const mapStateToProps = state => {

  const { loading } = 'loading.-.';
  return { 
    loading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
