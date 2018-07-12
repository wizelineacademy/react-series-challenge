import actions from '../actions';

describe('GifModal container actions', () => {
  describe('creators', () => {
    it('should return the correct action object from openModal creator', () => {
      const action = actions.creators.openModal();
      expect(action).toMatchSnapshot();
    });

    it('should return the correct action object from closeModal creator', () => {
      const action = actions.creators.closeModal();
      expect(action).toMatchSnapshot();
    });

    it('should return the correct action object from setModalGif creator', () => {
      const gif = { id: 'gif.id1', title: 'dogo' };
      const action = actions.creators.setModalGif({ gif });
      expect(action).toMatchSnapshot();
    });
  });
});
