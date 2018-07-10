import React, { Component } from "react";

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
import Header from "./../../component/header";


class Home extends Component{

  constructor(props) {
    super(props);
    this.home = this.props.match.path === '/';
  }

  render() {
    const { data, local, modifyLocal, fetchChange } = this.props;

    return (
      <div>
        <Header home={this.home} fetchChange={fetchChange} />
        <Giphys home={this.home} data={data} local={local} modifyLocal={modifyLocal} />
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