import React, { Component } from "react";
import Home from "../../components/Home";
import api from "../../services/api";

class HomeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      gifs: []
    };
  }

  componentDidMount() {
    this.setState(prevState => ({ ...prevState, loading: true }));

    api.trending().then(response => {
      console.log("response in mount", response);
      this.setState(prevState => {
        return { ...prevState, gifs: response, loading: false };
      });
    });
  }

  render() {
    return <Home gifs={this.state.gifs} loading={this.state.loading} />;
  }
}

export default HomeWrapper;
