import * as menu from './menu';
let creators = menu.default.creators;
let types = menu.default.types;

describe('Menu Actions', () => {
  
  it('Toggle Menu', ()=>{
    expect(creators.menuToggle()).toEqual({
        type:types.MENU_TOGGLE
    });
  });
});
