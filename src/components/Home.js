import React, { Component } from 'react';
//import logo from '../logo.svg';
import axios from 'axios';
import '../App.css';
import { Provider } from 'react-redux';
import store from '../store';
//import Favorites from './Favorites';
import {} from '../.env';

const URL = process.env.REACT_APP_API_URL+'trending?api_key='+process.env.REACT_APP_GIPHY_API_KEY+'&limit=10';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      searchFor: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        const gifs = res.data.data;
        this.setState({ gifs });
        //console.log(this.state.gifs);
      })
  }

  handleChange(event) {
    this.setState({searchFor: event.target.value});
    //console.log(event);
  }

  handleSubmit(event) {
    let url = process.env.REACT_APP_API_URL+'search?q='+this.state.searchFor+'&api_key='+process.env.REACT_APP_GIPHY_API_KEY+'&limit=10';
    axios.get(url)
      .then(res => {
        let gifs = res.data.data;
        this.setState({ gifs });
        //console.log(gifs);
      })

    event.preventDefault();
  }
  render() {
    return (
      <Provider store={store}>
        <div className="homeComponent">
          <div className="search">
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.searchFor} onChange={this.handleChange} className="search-input" />
              <input type="submit" value="Buscar" />
            </form>
          </div>
          <p className="App-intro">
            Trending:
          </p>
          <div className="container">
            { this.state.gifs.map(
              gif => <div className="element" key={gif.id}>
                      <img src={gif.images.downsized_medium.url} className="thegif" alt={gif.title}/>
                      <button onClick={() => this.addFavorite(gif)}>Like</button>
                    </div>
            )}
          </div>
        </div>
      </Provider>
    );
  }

  addFavorite(gif) {
    let fav = {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }
    store.dispatch({
      type: "ADD_FAVORITE",
      favorite: fav
    })
    //console.log(fav);
  }
  
}

export default App;
