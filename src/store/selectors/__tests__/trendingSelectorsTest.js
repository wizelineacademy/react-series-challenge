import { getTrendingData } from "../trendingSelectors";
import data from "./mocks/data.json";

describe("trendingSelectors", () => {
  it("should get trending data", () => {
    const actual = getTrendingData(data);

    const expected = [];
    expect(actual).toEqual(expected);
  });
});
