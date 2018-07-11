import actions from '../actions';

describe('Location container actions', () => {
  describe('creators', () => {
    it('should return a correct action object with setPath creator', () => {
      const action = actions.creators.setPath('/favorites');
      expect(action).toMatchSnapshot();
    });
  });
});
