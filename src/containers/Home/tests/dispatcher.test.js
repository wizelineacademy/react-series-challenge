import dispatcher from '../dispatcher';
import actions from '../actions';
import locationActions from '../../Location/actions';

describe('Home dispatcher', () => {
  it('should dispatch a loadTrendingGifs action', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).loadTrendingGifs();
    expect(dispatch.mock.calls[0][0]).toEqual(
      actions.creators.loadTrendingGifs()
    );
  });

  it('should dispatch a searchGifs action with term as payload', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).searchGifs('dogo');
    expect(dispatch.mock.calls[0][0]).toEqual(
      actions.creators.searchGifs('dogo')
    );
  });

  it('should dispatch a location action setPath with params as payload', () => {
    const dispatch = jest.fn();
    dispatcher(dispatch).setPath('/');
    expect(dispatch.mock.calls[0][0]).toEqual(
      locationActions.creators.setPath('/')
    );
  });
});
