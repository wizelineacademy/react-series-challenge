import {addFav, withdrawFav} from "../../../Containers/FavPage/action"

it('AddFav works', () => {
    expect(addFav("params")).toEqual({type:'ADD_FAV',params:"params"});
  });

  it('withdrawFav works', () => {
    expect(withdrawFav("123")).toEqual({type:'WITHDRAW_FAV',id:"123"});
  });