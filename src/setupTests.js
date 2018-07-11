import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

window.alert = (msg) => { console.log(msg); };

Enzyme.configure({ adapter: new Adapter() });
