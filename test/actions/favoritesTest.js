
import actions from '../../src/actions/favorites';

describe('Favorites Actions', function () {
  it('check Favorites actions trigger correct Action Types', () => {
    const { 
      FAVORITES_LOAD,
      FAVORITES_SAVE,
      FAVORITES_SEARCH,
      FAVORITES_SEARCH_REQ,
      FAVORITES_TOGGLE_REQ,
      FAVORITES_UPDATE,
      IS_FAV_UPDATE
    } = actions.types;
    const { 
      loadFavorites,
      saveFavoritess,
      searchFavorites,
      searchFavoritesReq,
      updateFavorites,
      updateIsFav,
      toggleFavoritesReq
    } = actions.creators;

    expect(loadFavorites('data')).toEqual({ type: FAVORITES_LOAD, payload: 'data' });
    expect(saveFavoritess('data')).toEqual({ type: FAVORITES_SAVE, payload: 'data' });
    expect(searchFavorites('data')).toEqual({ type: FAVORITES_SEARCH , payload: 'data' });
    expect(searchFavoritesReq('data')).toEqual({ type: FAVORITES_SEARCH_REQ, payload: 'data'  });
    expect(updateFavorites('data')).toEqual({ type: FAVORITES_UPDATE, payload: 'data'  });
    expect(toggleFavoritesReq('data')).toEqual({ type: FAVORITES_TOGGLE_REQ, payload: 'data'  });

    expect(updateIsFav('data')).toEqual({ type: IS_FAV_UPDATE  });

  });
});
