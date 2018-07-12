import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
global.localStorage = localStorageMock;

Enzyme.configure({ adapter: new Adapter() });
