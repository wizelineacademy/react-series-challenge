import React, { Component } from "react";

import { Link } from "react-router-dom";

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Selectors
import selectors from "./../../../redux/selectors";
// Actions
import actions from "./../../../redux/actions/";

import './home.css'

// Components
import Footer from "./../../component/footer";
import Giphys from "./../../component/giphys";

class Home extends Component{

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.searchInput.value.length > 0) {
      this.props.fetchChange(this.searchInput.value.trim());
    } else {
      this.searchInput.focus();
      alert('please enter the text to be search');
    }
  }

  handleButton = (event) => {
    event.preventDefault();
    this.props.fetchChange('');
  }

  render() {
    const { data, local, modifyLocal } = this.props;

    return (
      <div>
        <div>
          <Link to="/keeps">Favorites</Link>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>API:</legend>
              Search: <input type="text" ref={input => { this.searchInput = input; } } />
              <input type="submit" value="Search" />
              <br />
              <br />
              <input type="button" value="just show the trendings" onClick={this.handleButton} />
            </fieldset>
          </form>
        </div>
        <Giphys data={data} local={local} modifyLocal={modifyLocal} />
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    data: selectors.fetch_data(state),
    local: selectors.local(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  const { fetchChange, modifyLocal } = actions;

  return bindActionCreators(
    {
      fetchChange,
      modifyLocal,
    },
    dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);