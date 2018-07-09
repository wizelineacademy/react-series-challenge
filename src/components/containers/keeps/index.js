import React, { Component } from "react";

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
    const { ids, likes, modifyLocal } = this.props;

    return (
      <div>
        <div>YOUR SAVES GIPHY...</div>
        <Giphys data={{ data: likes }} ids={ids} modifyLocal={modifyLocal} />
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    likes: selectors.local_likes(state),
    ids: selectors.local_ids(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  const {modifyLocal } = actions;

  return bindActionCreators({ modifyLocal, }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Keeps);