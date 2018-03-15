import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

var localStorageMock = (function() {
  var store = {};

  return {
      getItem: function(key) {
          return store[key] || null;
      },
      setItem: function(key, value) {
          store[key] = value.toString();
      },
      clear: function() {
          store = {};
      }
  };

})();

Object.defineProperty(global, 'localStorage', {
   value: localStorageMock
});
