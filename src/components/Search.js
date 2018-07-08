import React, { Component } from "react";
import Gif from "./Gif";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }
  componentDidMount() {
    console.log(this.props);
    fetch(
      process.env.REACT_APP_API_URL+"search?api_key=" +
        process.env.REACT_APP_API_KEY +
        "&q=" +
        this.props.location.state.tag +
        "&limit=25&offset=0&rating=G&lang=en",
      {
        method: "GET",
        timeout: process.env.REACT_APP_TIMEOUT
      }
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data.data);
        let images = data.data.map(image => {
          return (
            <Gif
              id={image.id}
              src={image.images.fixed_width.url}
              liked={false}
            />
          );
        });

        this.setState({ gifs: images });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props);
    return <React.Fragment>{this.state.gifs}</React.Fragment>;
  }
}
export default Search;
