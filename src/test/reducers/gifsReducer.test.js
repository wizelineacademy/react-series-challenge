import gifActions from '../../actions/gifActions';
import gifsReducer from '../../reducers/gifsReducer';

describe('Test gifsReducer', () => {
  const payload = {
    gifs: [
      {
        id: 3,
        title: 'gif',
        images: {
          downsized: {
            url: 'url'
          }
        }
      }
    ]
  };

  it('search gifs received', () => {
      const initialState = [];

      const state = gifsReducer(
        initialState,
        {
          type: gifActions.types.SEARCH_GIFS_RECEIVED,
          payload
        }
      );

      expect(state).toEqual(payload.gifs);
  });

  it('trending gifs received', () => {
      const initialState = [];

      const state = gifsReducer(
        initialState,
        {
          type: gifActions.types.TRENDING_GIFS_RECEIVED,
          payload
        }
      );

      expect(state).toEqual(payload.gifs);
  });

  it("returns the same state when doesn't know hot to handle the action", () => {
    const initialState = [1, 2, 3];
    const state = gifsReducer(initialState, { type: 'OTHER' });

    expect(state).toEqual(initialState);
  });
});
