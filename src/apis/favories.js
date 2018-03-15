
const storeName = 'cc_giphy_favorites'
export default {
  save: data => {localStorage.setItem(storeName,JSON.stringify(data)) },
  load: () => JSON.parse(localStorage.getItem(storeName)),
  search: (array ,term) => {
    return array.filter((el) => {
      return el.title.search(term) > -1 || el.id.search(term) > -1 ;
    });
  }
}