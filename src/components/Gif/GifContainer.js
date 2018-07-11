import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import favoriteGifsActions from '../../actions/favoriteGifs';
import Gif from './Gif';

const mapDispatchToProps = (dispatch) => {
  const { addFavorite, removeFavorite } = favoriteGifsActions.creators;
  return bindActionCreators({
    addFavorite,
    removeFavorite,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Gif);
