import 'raf/polyfill';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

// global.fetch = require('jest-fetch-mock');

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

Enzyme.configure({ adapter: new Adapter() });
