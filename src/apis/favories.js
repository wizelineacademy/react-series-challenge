
const storeName = 'cc_giphy_favorites'
export default {
  save: data => localStorage.setItem(storeName,data),
  load: () => localStorage.getItem(storeName),
  search: (array ,term) => {
    return array.filter((el) => {
      return el.title.search(term) > -1;
    });
  }
}