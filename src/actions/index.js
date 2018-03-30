import homeActions from './home_actions';
import favoriteActions from './favorites_actions';
import detailsActions from './details_actions';
import listActions from './list_actions';
import searchActions from './search_actions';
import errorActions from './error_actions';
import loadingActions from './loading_actions';
import paginatorActions from './paginator_actions';

export default {
  ...homeActions,
  ...favoriteActions,
  ...detailsActions,
  ...listActions,
  ...searchActions,
  ...errorActions,
  ...loadingActions,
  ...paginatorActions
}
