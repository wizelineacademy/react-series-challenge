import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

global.fetch = require("jest-fetch-mock");
