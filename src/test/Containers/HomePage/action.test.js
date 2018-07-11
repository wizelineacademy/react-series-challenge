import {queryTrending, queryTrendingSuccess,queryTrendingError} from "../../../Containers/HomePage/action"

it('AddFav works', () => {
    expect(queryTrending("params")).toBe({type:'QUERY_TRENDING',param:"params"});
  });

  it('withdrawFav works', () => {
    expect(queryTrendingSuccess("information")).toBe({type:'QUERY_TRENDING_SUCCESS',data:"information"});
  });

  it('withdrawFav works', () => {
    expect(queryTrendingError("fail")).toBe({type:'QUERY_TRENDING_ERROR',error:"fail"});
  });