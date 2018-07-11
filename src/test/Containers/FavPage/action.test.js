import {addFav, withdrawFav} from "../../../Containers/FavPage/action"

it('AddFav works', () => {
    expect(addFav("params")).toBe({type:'ADD_FAV',params:"params"});
  });

  it('withdrawFav works', () => {
    expect(withdrawFav("123")).toBe({type:'WITHDRAW_FAV',id:"123"});
  });