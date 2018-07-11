import reducer from '../../../redux/reducers/gifts';
import actions from '../../../redux/actions/gifts';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should handle GIFT_FETCHED', () => {
    const fetchAction = {
      type: actions.types.GIFT_FETCHED,
      payload: {"data":"cdcd"}
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, fetchAction)).toEqual("cdcd");
  });
});