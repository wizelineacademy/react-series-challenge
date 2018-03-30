import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
require('jest-localstorage-mock');

Enzyme.configure({ adapter: new Adapter() });
