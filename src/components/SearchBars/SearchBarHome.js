import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import giftActions from '../../redux/actions/gifts';
import './SearchBar.css'

const SearchBarHome = ({ getGift }) =>{
  
  const onInputChange = (term) => {
    getGift({ text: term });
  }

  return (
    <div>
      <input className="SearchBar"
        placeholder={"Search GIPHY"}
        onChange={(event) => onInputChange(event.target.value)} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const { getGift } = giftActions.creators;

  return bindActionCreators({
    getGift,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBarHome);
