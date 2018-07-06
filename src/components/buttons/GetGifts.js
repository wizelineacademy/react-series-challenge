import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import giftActions from '../../redux/actions/gifts';

const newGift = {
  text: "nuevo",
};

const GetGifts = ({ giftFetched }) =>

  <button onClick={() => giftFetched({ newGift })}>
    Search Gift
  </button>;

const mapDispatchToProps = (dispatch) => {
  const { giftFetched } = giftActions.creators;

  return bindActionCreators({
    giftFetched,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(GetGifts);
