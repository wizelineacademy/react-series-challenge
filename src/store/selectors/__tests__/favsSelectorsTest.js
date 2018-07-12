import { getFavsData, getFavsDataIds } from "../favsSelectors";
import data from "./mocks/data.json";

describe("favsSelectors", () => {
  it("should get favorite giphy data", () => {
    const actual = getFavsData(data);

    const expected = [];
    expect(actual).toEqual(expected);
  });

  it("should get favorite giphy data ids", () => {
    const actual = getFavsDataIds(data);

    const expected = [];
    expect(actual).toEqual(expected);
  });
});
