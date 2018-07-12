import {queryTrending, queryTrendingSuccess,queryTrendingError} from "../../actions/index"

it('AddFav works', () => {
    expect(queryTrending("params")).toEqual({type:'QUERY_TRENDING',param:"params"});
  });

  it('withdrawFav works', () => {
    expect(queryTrendingSuccess("information")).toEqual({type:'QUERY_TRENDING_SUCCESS',data:"information"});
  });

  it('withdrawFav works', () => {
    expect(queryTrendingError("fail")).toEqual({type:'QUERY_TRENDING_ERROR',error:"fail"});
  });