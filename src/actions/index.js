import homeActions from './home_actions';
import favoriteActions from './favorites_actions';
import listActions from './list_actions';

export default {
  ...homeActions,
  ...favoriteActions,
  ...listActions,
  // TODO Search actions
}
