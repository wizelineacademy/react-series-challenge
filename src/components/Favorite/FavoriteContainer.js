import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import favoriteGifsActions from '../../actions/favoriteGifs';
import Favorite from './Favorite';

const mapStateToProps = (state) => {
  const { favoriteGifs } = state;
  return { favoriteGifs };
};

const mapDispatchToProps = (dispatch) => {
  const { fetchFavorite } = favoriteGifsActions.creators;
  return bindActionCreators({
    fetchFavorite,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
