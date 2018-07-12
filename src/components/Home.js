import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queryTrending } from '../actions'
import Gif from './Gifs';
import {} from '../.env';

class Home extends Component {
  state = {
    openFullScreen: false,
    selectedImageUrl: ''
  }

  componentDidMount() {
    const { queryTrending } = this.props;
    queryTrending();
  }

  handleChangue() {
    
  }

  handleSubmit() {
  }

  render() {
    const { gifs} = this.props;
    return (
        <div className="homeComponent">
          <div className="search">
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.searchFor} onChange={this.handleChange} className="search-input" />
              <input type="submit" value="Buscar" />
            </form>
          </div>
          <div className="container">
          {
            gifs && gifs.map((gif, index) => {return <Gif url={gif.images.fixed_width.url} id={gif.id} key={gif.id}/>})
          }
          </div>
        </div>
    );
  }

}

const mapStateToProps = state => {
  return{
  gifs: state.home.trendingGifs,
  loading: state.home.trendingLoading
}};

const mapDispatchToProps = {
  queryTrending
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
