import { render } from 'react-dom';
import '../';
jest.mock('react-dom');

describe('index', () => {
  it('Should check if the application was render', () => {
    expect(render).toHaveBeenCalledTimes(1);
  });
});
