import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';



// browser mocks
const localStorageMock = (function() {
  let store = {}
  return {
    getItem: function(key) {
      return store[key] || null
    },
    setItem: function (key, value) {
      if(value) store[key] = value.toString()
    },
    removeItem: function(key) {
      delete store[key]
    },
    clear: function() {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

window.alert = (msg) => { console.log(msg); };


Enzyme.configure({ adapter: new Adapter() });
