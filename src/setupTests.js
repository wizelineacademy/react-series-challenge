import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
