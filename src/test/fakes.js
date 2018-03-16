const state = {
  error: {},
  favorites: { items: {} },
  items: { list: {} },
  search: { query: '' }
}

const Store = {
  ...state,
  getState: () => state,
  subscribe: jest.fn(),
  dispatch: jest.fn()
}

const Item = {
  id: 'someId',
  title: 'Some fake title',
  image: 'someUrl'
};

const Props = {
  item: Item,
  items: { first: { ...Item } },
  imgUrl: Item.image,
  id: Item.id,
  key: Item.id,
}

const Context = { context: { store: Store } };

const This = (spy1, spy2) => ({
  props: {
    addFavorite: spy1,
    removeFavorite: spy2,
    getSearchItems: spy1,
    searchFavorites: spy2
  }
});

export {
  Context,
  Item,
  Props,
  Store,
  This
}
