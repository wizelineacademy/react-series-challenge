import { connect } from 'react-redux';
import selectors from '../../selectors';
import dispatcher from './dispatcher';
import GifModal from '../../components/GifModal';

export default connect(
  selectors.gifModalSelector,
  dispatcher
)(GifModal);
