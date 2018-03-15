import giphyDetailReducer from '../giphyDetailReducer';
import { FETCH_GIPHY_DETAIL_SUCCESS } from '../../actions/action_types';

describe('team reducer', () => {
  it('should return the initial state', () => {
    expect(giphyDetailReducer(undefined, {})).toEqual({"giphy" : null});
  });

  it('should handle FETCH_GIPHY_DETAIL_SUCCESS', () => {
    const mockGiphy = {data: { id: 'XXX', images: {}}};
    const action = {
      type: FETCH_GIPHY_DETAIL_SUCCESS,
      payload: mockGiphy
    }
    expect(giphyDetailReducer({}, action)).toEqual({"giphy": mockGiphy.data});
  });
});