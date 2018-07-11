import { connect } from 'react-redux';

import Favorite from './Favorite';

const mapStateToProps = (state) => {
  const { favoriteGifs } = state;
  return { favoriteGifs };
};

export default connect(mapStateToProps)(Favorite);
