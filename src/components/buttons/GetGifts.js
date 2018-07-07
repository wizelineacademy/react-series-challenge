import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import giftActions from '../../redux/actions/gifts';

const GetGifts = ({ getGift }) =>{
  
  const onInputChange = (term) => {
    getGift({ text: term });
  }

  return (
    <input 
      placeholder={"Search GIPHY"}
      onChange={(event) => onInputChange(event.target.value)} />
  );
}

const mapDispatchToProps = (dispatch) => {
  const { getGift } = giftActions.creators;

  return bindActionCreators({
    getGift,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(GetGifts);
