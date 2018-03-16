import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import './__mocks__/localStorage';

Enzyme.configure({ adapter: new EnzymeAdapter() });
