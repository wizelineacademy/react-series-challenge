import homeActions from './home';
import itemsListActions from './itemsList';
import loadingActions from './loading';

export default {
  ...homeActions,
  ...itemsListActions,
  ...loadingActions,
};
