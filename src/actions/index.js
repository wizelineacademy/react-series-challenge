import homeActions from './home_actions';
import favoriteActions from './favorites_actions';
import detailsActions from './details_actions';
// import listActions from './list_actions';

export default {
  ...homeActions,
  ...favoriteActions,
  ...detailsActions
  // ...listActions,
  // TODO Search actions
}
