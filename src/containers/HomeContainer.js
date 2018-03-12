import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GifsContainer from '../components/GifsContainer'
import giphyActions from '../actions/giphy';

class HomeContainer extends Component {
   render() {
    const { handleSubmit, match, history } = this.props;
    return (
      <div>
        <GifsContainer match={match} history={history} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  const { searchGifsRequested } = giphyActions.creators;

  return bindActionCreators({
    handleSubmit: searchGifsRequested,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(HomeContainer);