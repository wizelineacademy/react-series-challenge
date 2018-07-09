import homeActions from './home';
import itemsListActions from './itemsList';
import loadingActions from './loading';
import searchActions from './search';
import favoritesAction from './favorites';
import errorActions from './error';

export default {
  ...homeActions,
  ...itemsListActions,
  ...loadingActions,
  ...searchActions,
  ...favoritesAction,
  ...errorActions,
};
