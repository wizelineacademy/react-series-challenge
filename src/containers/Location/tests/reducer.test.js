import reducer from '../reducer';
import actions from '../actions';

describe('Location container reducer', () => {
  it('should modifiy the reducer state path property when sending a PATH_SET action', () => {
    const action = actions.creators.setPath('/favorites');
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });

  it('should return the initialState or prevState when sending a not recognized action', () => {
    const action = { type: 'UNKNOWN.action' };
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });
});
