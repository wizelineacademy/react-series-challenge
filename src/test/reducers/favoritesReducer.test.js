import favoriteActions from '../../actions/favoriteActions';
import favoritesReducer from '../../reducers/favoritesReducer';

describe('Test favoritesReducer', () => {
  const payload = {
    id: 3,
    title: 'gif',
    url: 'url'
  };

  it('add gif to favorites', () => {
      const initialState = [];

      const state = favoritesReducer(
        initialState,
        {
          type: favoriteActions.types.TOGGLE_FAVORITE,
          payload
        }
      );

      expect(state).toEqual(
        [
          {
            id: payload.id,
            images: {
              downsized: {
                url: payload.url
              }
            },
            title: payload.title
          }
        ]
      );
  });

  it('remove gif from favorites', () => {
    const initialState = [ { id: 3} ];

    const state = favoritesReducer(
      initialState,
      {
        type: favoriteActions.types.TOGGLE_FAVORITE,
        payload
      }
    );

    expect(state).toEqual([]);
  });

  it("returns the same state when doesn't know hot to handle the action", () => {
    const initialState = [1, 2, 3];
    const state = favoritesReducer(initialState, { type: 'OTHER' });

    expect(state).toEqual(initialState);
  });
});
