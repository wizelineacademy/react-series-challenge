import 'raf/polyfill';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import 'jest-localstorage-mock';


Enzyme.configure({ adapter: new Adapter() });