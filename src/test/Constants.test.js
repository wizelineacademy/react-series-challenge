import constants from '../constants';

describe('Constants' , () => {
  it('Constants match snapshot', () => {
    expect(constants).toMatchSnapshot();
  })
})