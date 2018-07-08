import React, { Component } from "react";
import { connect } from 'react-redux'

// selectors
import selectors from "./../../../redux/selectors";

import './home.css'

class Home extends Component{

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.searchInput.value.length > 3 ){

    } else {

    }
  }

  render() {
    const { data } = this.props;

    let giphyView;

    if (data && data.data) {
      giphyView = data.data.map((v, i) => (
        <div className="giphy">
          <img src={v.images.fixed_width.webp} alt={v.title}/>
        </div>
      ));
    }

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>API:</legend>
              Search: <input type="text" ref={input => { this.searchInput = input; } } />
              <input type="submit" value="Search" />
              <br />
              <br />
              <input type="button" value="just show the trendings" />
            </fieldset>
          </form>
        </div>
        <div>
          {giphyView}
        </div>
        <footer className="footer">
          <div>Just a footer =)</div>
        </footer>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    data: selectors.api_data(state),
  }
}

export default connect(mapStateToProps)(Home);