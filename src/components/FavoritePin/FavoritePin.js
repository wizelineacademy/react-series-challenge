import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import gifDetails from '../../reducers/gif';

import FavoritePinStyled from './FavoritePinStyled';

const FavoritePin = ({gifReference, marked, actions}) => {
  return(
    <FavoritePinStyled marked={marked}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        return actions.markFavorite(!marked, gifReference);
      }}/>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({...gifDetails.actions}, dispatch)
});

export default connect(null, mapDispatchToProps)(FavoritePin);
