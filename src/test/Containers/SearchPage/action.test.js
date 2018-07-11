import {querySearch, querySearchSuccess,querySearchError} from "../../../Containers/SearchPage/action"

it('AddFav works', () => {
    expect(querySearch("params")).toBe({type:'QUERY_SEARCH',param:"params"});
  });

  it('withdrawFav works', () => {
    expect(querySearchSuccess("information")).toBe({type:'QUERY_SEARCH_SUCCESS',data:undefined});
  });

  it('withdrawFav works', () => {
    expect(querySearchError("fail")).toBe({type:'QUERY_SEARCH_ERROR',error:"fail"});
  }); 