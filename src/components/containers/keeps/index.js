import React, { Component } from "react";

import { Link } from "react-router-dom";

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Components
import Footer from "./../../component/footer";
import Giphys from "./../../component/giphys";

// Selectors
import selectors from "./../../../redux/selectors";
// Actions
import actions from "./../../../redux/actions/";

class Keeps extends Component{
  render() {
    const { local, modifyLocal } = this.props;

    return (
      <div>
        <Link to="/">HOME</Link>
        <div>YOUR SAVES GIPHY...</div>
        <Giphys data={{ data: local.likes }} local={local} modifyLocal={modifyLocal} />
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    local: selectors.local(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  const {modifyLocal } = actions;

  return bindActionCreators({ modifyLocal, }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Keeps);