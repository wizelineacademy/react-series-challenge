import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


const localStorageMock = {
  getItem: () => '{}',
  setItem: () => ''
};
global.localStorage = localStorageMock
