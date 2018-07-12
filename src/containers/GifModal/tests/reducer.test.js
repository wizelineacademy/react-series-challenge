import actions from '../actions';
import reducer from '../reducer';

describe('GifModal container reducer', () => {
  it('should set the state isOpen prop to true when passing MODAL_OPEN action', () => {
    const action = actions.creators.openModal();
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });

  it('should set the state isOpen prop to false when passing MODAL_CLOSE action', () => {
    const action = actions.creators.closeModal();
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });

  it('should set the state gif prop to  when passing MODAL_CLOSE action with a gif in payload', () => {
    const gif = { id: 'id.1', title: 'dogo' };
    const action = actions.creators.setModalGif({ gif });
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });

  it('should return the initialState or prevState when action is not recognized', () => {
    const action = { type: 'UNKNOWN.ACTION' };
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });
});
