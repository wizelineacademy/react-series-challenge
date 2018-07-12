import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import selectors from './selectors';
import GifItem from '../../components/GifItem';

export default connect(
  selectors.propsSelector,
  dispatcher
)(GifItem);
