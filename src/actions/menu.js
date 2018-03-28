const MENU_TOGGLE = 'menu_toggle';
const menuToggle = (payload) => ({ type: MENU_TOGGLE });


export default {
  types: {
    MENU_TOGGLE
  },
  creators: {
    menuToggle
  }
};