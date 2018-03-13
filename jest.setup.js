import "raf/polyfill";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

global.fetch = require("jest-fetch-mock");

Enzyme.configure({ adapter: new Adapter() });
