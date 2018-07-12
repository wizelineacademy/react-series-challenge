import {querySearch, querySearchSuccess,querySearchError} from "../../actions/search";

it('AddFav works', () => {
    expect(querySearch("params")).toEqual({type:'QUERY_SEARCH',param:"params"});
  });

it('withdrawFav works', () => {
    expect(querySearchSuccess("information")).toEqual({type:'QUERY_SEARCH_SUCCESS',data:"information"});
});

it('withdrawFav works', () => {
    expect(querySearchError("fail")).toEqual({type:'QUERY_SEARCH_ERROR',error:"fail"});
});