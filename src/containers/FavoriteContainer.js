import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GifsContainer from '../components/GifsContainer'
import giphyActions from '../actions/giphy';

class FavoriteContainer extends Component {
   render() {
    const { handleSubmit, match, history } = this.props;
    return (
      <div>
        <GifsContainer getFavorites match={match} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  const { filterFavorites } = giphyActions.creators;

  return bindActionCreators({
    handleSubmit: filterFavorites,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(FavoriteContainer);