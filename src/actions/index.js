import homeActions from './home';
import itemsListActions from './itemsList';
import loadingActions from './loading';
import searchActions from './search_actions';

export default {
  ...homeActions,
  ...itemsListActions,
  ...loadingActions,
  ...searchActions,
};
