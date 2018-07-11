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
    this.handleMyfunc()
  }


  handleMyfunc = () => {
    this.props.localFind('');
  }

  render() {
    const { local, modifyLocal, localFind } = this.props;

    return (
      <div>
        <Header match={this.props.match} action={localFind} />
        <Giphys home={false} data={{ data: local.likes }} local={local} modifyLocal={modifyLocal} />
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
  const { modifyLocal, localFind } = actions;

  return bindActionCreators({ modifyLocal, localFind }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);