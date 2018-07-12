import React, { Component } from "react";

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Components
import Footer from "./../../component/footer";
import Giphys from "./../../component/giphys";
import Header from "./../../component/header";

// Selectors
import selectors from "./../../../redux/selectors";
// Actions
import actions from "./../../../redux/actions/";

class Favorites extends Component{
  componentDidMount() {
    this.props.localFind('');
  }

  render() {
    const { local, localModify, localFind } = this.props;

    return (
      <div>
        <Header match={this.props.match} action={localFind} />
        <Giphys home={false} data={{ data: local.likes }} local={local} localModify={localModify} />
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
  const { localModify, localFind } = actions;

  return bindActionCreators({ localModify, localFind }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);